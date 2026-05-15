# Unit Kind Examples

These are the concrete patterns the generator should imitate. Every unit kind has 2–3 worked examples; each is a complete JS object literal that would pass through `renderUnit()` unmodified. Voice rules live separately in `voice-examples.md`.

> Source: examples drawn from the reference implementation at `docs/codebase-demo-mermaid-essay.html` and from the spec voice pairs (`docs/superpowers/specs/2026-05-03-codemermaid-essay-design.md`). Don't invent codebases — only use repos you've actually scanned.

---

## concept

Plain prose, 60–150 words. The teacher pointing at a thing before showing code.

### Example 1 — Hono routing

```javascript
{
  kind: "concept",
  title: "Why a trie?",
  body:
    "Hono picks a trie for path matching. Express uses a regex array. Why does that matter? Look at the lookup cost: trie is O(path-segments), regex array is O(routes-registered). Hono runs the same benchmark as Express on a 200-route app and wins by 30x. The data-structure choice IS the performance story — which is the only reason this code reads cleanly. Once you've internalized that, the rest of the router code reads as scaffolding."
}
```

### Example 2 — React fiber

```javascript
{
  kind: "concept",
  title: "Fiber as scheduling unit",
  body:
    "Before fibers, React rendered top-to-bottom in one synchronous shot. With fibers, every component instance becomes a small interruptible work unit on a linked list. The scheduler can pause between fibers, give the browser a frame, and pick up where it left off. The thing to notice: a fiber is not a component. It's a *promise* of component work. That distinction lets React keep two trees alive — current and work-in-progress — so it can throw away half-rendered work without tearing the UI."
}
```

---

## code-walk (stacked)

Default layout. Code first, then explanation. Use when prose is one paragraph.

### Example 1 — Auth middleware (stacked)

```javascript
{
  kind: "code-walk",
  title: "Token check before any handler",
  layout: "stacked",
  file: "src/middleware/auth.ts",
  code:
`export const auth: Middleware = async (c, next) => {
  const token = c.req.header('Authorization')?.slice(7);
  if (!token) { c.set('user', null); return next(); }
  try {
    const user = await verify(token);
    c.set('user', user);
  } catch {
    c.set('user', null);
  }
  return next();
};`,
  highlightLines: [3, 6, 9],
  explanation:
    "Watch what they do here — the token check happens before any handler runs, but they don't throw on a malformed token, they `next()` with a null user. That's the move. Downstream handlers decide whether `null user` is OK for them, instead of the middleware deciding for everyone."
}
```

### Example 2 — Repository read (stacked)

```javascript
{
  kind: "code-walk",
  title: "Read-through cache pattern",
  layout: "stacked",
  file: "src/repo/user.ts",
  code:
`export async function findUser(id: string) {
  const cached = cache.get(id);
  if (cached) return cached;
  const row = await db.users.findById(id);
  cache.set(id, row, { ttl: 60_000 });
  return row;
}`,
  highlightLines: [2, 3, 5],
  explanation:
    "The pattern is read-through: cache first, DB second, write to cache on miss. The TTL is short on purpose — this user table mutates often and stale-by-a-minute is acceptable here. If you've used DataLoader, you'll find this surprising: no batching at all. Why? Because user lookups in this app are already keyed by request, so DataLoader's win wouldn't apply."
}
```

---

## code-walk (split)

Sticky code on the left, prose with multiple beats on the right. Use when explanation has 2+ beats tied to specific lines and stacked would force scroll-back.

### Example 1 — Router registration (split)

```javascript
{
  kind: "code-walk",
  title: "Building the trie",
  layout: "split",
  file: "src/router.ts",
  code:
`function add(path: string, handler: Handler) {
  const segments = path.split('/').filter(Boolean);
  let node = root;
  for (const seg of segments) {
    const isParam = seg.startsWith(':');
    const key = isParam ? '*' : seg;
    if (!node.children[key]) node.children[key] = makeNode();
    if (isParam) node.children[key].param = seg.slice(1);
    node = node.children[key];
  }
  node.handler = handler;
}`,
  highlightLines: [4, 5, 6, 8, 11],
  explanation:
`<h3>The walk loop <span class="ref">L4</span></h3>
For every path segment, descend into the trie or create a child node. Parameter segments collapse into a single wildcard key (\`'*'\`) so the same node serves \`:userId\`, \`:slug\`, etc.

<h3>Param capture <span class="ref">L8</span></h3>
The wildcard child remembers its original parameter name. At lookup time, the matching segment text gets stored under that name on the request context.

<h3>Handler at the leaf <span class="ref">L11</span></h3>
Handlers live only at leaf nodes. That's why ambiguous routes can't exist in this design — every path resolves to exactly one node.`
}
```

---

## code-walk (stepped)

Sticky code on the left, ordered `steps[]` on the right with `{ highlightLines, beat }`. Scroll-driven highlight migration. **At most one per module.**

### Example 1 — Request lifecycle walk (stepped)

```javascript
{
  kind: "code-walk",
  title: "What `app.fetch()` actually does",
  layout: "stepped",
  file: "src/app.ts",
  code:
`async fetch(request: Request, env: Env) {
  const ctx = makeContext(request, env);
  const route = router.match(ctx.req.path);
  if (!route) return new Response('Not found', { status: 404 });
  for (const m of this.middleware) {
    await m(ctx, async () => {});
    if (ctx.finalized) return ctx.res;
  }
  return route.handler(ctx);
}`,
  steps: [
    { highlightLines: [2], beat: "First, build the request context — a single object every middleware and handler will share. This is the only mutable thing the framework hands out." },
    { highlightLines: [3, 4], beat: "Then match a route. Notice: the 404 escape happens *before* any middleware runs. That's a deliberate choice — auth middleware can't fire on paths that don't exist." },
    { highlightLines: [5, 6, 7], beat: "Walk the middleware in registration order. The `next()` callback they get is a no-op here because the framework drives the chain itself. If a middleware sets `ctx.finalized`, it short-circuits the rest." },
    { highlightLines: [9], beat: "Finally, the handler. By the time we reach this line, all middleware ran and didn't finalize — so the handler's `ctx` is fully populated." }
  ]
}
```

---

## guess-first

Question that requires the reader to commit to a guess before the reveal. Collapsed `<details>` element. Question ≤ 2 sentences, reveal ≤ 150 words.

### Example 1 — Cache TTL

```javascript
{
  kind: "guess-first",
  question: "Why does the cache TTL drop to 0 inside `loginAs()`?",
  reveal: {
    code:
`if (process.env.NODE_ENV === 'test') {
  cache.setDefaultTTL(0);
}`,
    explanation:
      "Tests run with `NODE_ENV=test`, and a non-zero TTL means the next test sees stale state from the previous one. Setting TTL to 0 is cheaper than wiping the cache between tests — the data still passes through cache.set/get, so the code path under test stays identical to production."
  }
}
```

### Example 2 — Why two trees?

```javascript
{
  kind: "guess-first",
  question: "React keeps two fiber trees alive at once. Why two and not one?",
  reveal: {
    explanation:
      "If render fails or gets aborted (suspense, error boundary, scheduler interrupt), React needs to throw away the in-progress work and keep the previous UI mounted. With one tree, you'd be mutating live UI state — half-rendered = visible bugs. With two trees, the work-in-progress mutates freely; commit phase atomically swaps pointers."
  }
}
```

---

## compare

Side-by-side code with a lesson banner. Use for "before/after" patterns or "library A vs library B" framings. ≤ 12 lines per side, lesson ≤ 80 words.

### Example 1 — Optional chaining vs guard

```javascript
{
  kind: "compare",
  title: "Two ways to read a possibly-missing field",
  left: {
    label: "Verbose: explicit guards",
    code:
`if (user && user.profile && user.profile.avatar) {
  setSrc(user.profile.avatar);
}`
  },
  right: {
    label: "Idiomatic: optional chaining",
    code: `setSrc(user?.profile?.avatar);`
  },
  lesson:
    "Both branches handle the same null cases, but the optional-chaining form is a single expression — easier to use as a value (e.g., default with `?? '/avatar.png'`)."
}
```

### Example 2 — Sync vs async cache check

```javascript
{
  kind: "compare",
  title: "When the API shape hides the cost",
  left: {
    label: "Looks the same, isn't",
    code:
`const r = await getUser(id);
return r;`
  },
  right: {
    label: "What actually runs",
    code:
`const cached = cache.get(id);   // sync
if (cached) return cached;       // sync return path
const r = await fetch(...);      // network only on miss
return r;`
  },
  lesson:
    "Heads up — `await` doesn't tell you whether work happened. The sync cache hit and the async network fetch share the same call site. The shape of the API hides the cost."
}
```

---

## surprise

A counterintuitive observation worth pausing on. 1–3 sentences. Distinct callout style.

### Example 1 — Middleware short-circuit

```javascript
{
  kind: "surprise",
  title: "Middleware runs before routing",
  body:
    "Every middleware fires *before* the framework checks whether the route exists. That means a logging middleware logs every 404 the wild internet sends you. Useful or noisy depending on your perspective."
}
```

### Example 2 — Trie wildcards

```javascript
{
  kind: "surprise",
  title: "All `:params` collapse to one trie key",
  body:
    "It doesn't matter whether you wrote `:userId` or `:slug` — both segments become the same `'*'` child in the trie. The original name only resurfaces at lookup time. That's why two routes with different param names but identical positions are *the same route*."
}
```

### Example 3 — The cost is in the API shape

```javascript
{
  kind: "surprise",
  body:
    "Heads up — this returns a Promise but the cache check is synchronous. If you `await` this without checking the cache flag first, you've already lost the early-return win. The shape of the API hides the cost."
}
```

---

## takeaway

End-of-section recap. 2–4 sentences. Stronger styling than `concept` so readers know they've reached a checkpoint.

### Example 1 — Auth recap

```javascript
{
  kind: "takeaway",
  body:
    "Auth in this codebase pushes the policy decision *down* into handlers, not up into middleware. Middleware sets `user` (or `null`) and gets out of the way. That's why you'll see `if (!ctx.user) ...` in every protected handler — and that's the right shape."
}
```

### Example 2 — Router recap

```javascript
{
  kind: "takeaway",
  body:
    "The router is a trie because lookup cost matters more than registration cost. Param names are bookkeeping; the actual match key is structural. Once you see this, every other choice in the file (no regex, no precompile step, no route ordering) lines up."
}
```

---

## diagram

Architecture / sequence / state figure. Inline in `units[]`. Renders with a Zoom button by default.

### Example 1 — Architecture flow (zoomable)

```javascript
{
  kind: "diagram",
  title: "Where the auth handshake actually lives",
  mermaid:
`graph TD
  Client["Browser"]
  CDN["Edge CDN"]
  App["app.fetch()"]
  Auth["auth middleware"]
  Handler["protected handler"]
  Client -->|"HTTPS"| CDN
  CDN -->|"forwards"| App
  App -->|"runs middleware chain"| Auth
  Auth -->|"sets ctx.user"| Handler`,
  caption:
    "Auth lives in the framework's middleware loop, *not* on a route prefix. That's why every protected handler still has to check `ctx.user` itself — middleware never short-circuits on missing auth.",
  zoomable: true
}
```

### Example 2 — Login sequence (sequenceDiagram)

```javascript
{
  kind: "diagram",
  title: "Login sequence (happy path)",
  mermaid:
`sequenceDiagram
  participant U as User
  participant F as Frontend
  participant API as Backend
  participant DB as Postgres
  U->>F: submit form
  F->>API: POST /login
  API->>DB: SELECT user WHERE email=...
  DB-->>API: row
  API->>API: bcrypt.compare(password, row.hash)
  API-->>F: { token }
  F-->>U: redirect /app`,
  caption:
    "Notice the `bcrypt.compare` lives in the API — not the DB. That's the whole reason the row leaves the database; if you moved bcrypt into a stored procedure, you could keep the hash on-server. This codebase chose horizontal scaling over that.",
  zoomable: true
}
```

---

## storyboard

Multi-scene Mermaid player with optional paired code. Use when a static diagram would hide the sequence of moves.

```javascript
{
  kind: "storyboard",
  title: "How Phase 6 assembles one page",
  caption: "The page appears when the shell, partials, data, and validator line up.",
  scenes: [
    {
      name: "Read shell",
      mermaid:
`flowchart LR
  A["template-essay.html"] --> B["slot markers"]
  B --> C["empty page shell"]`,
      explanation:
        "Start with the shell. It owns the document structure, but it is still hollow: title slots, CSS slots, JS slots, and one PAGE_DATA slot."
    },
    {
      name: "Inline partials",
      mermaid:
`flowchart LR
  A["_base.css"] --> C["self-contained HTML"]
  B["_essay.css"] --> C
  D["_runtime.js"] --> C
  E["_essay.js"] --> C`,
      code: {
        file: "skills/codemermaid/SKILL.md",
        lang: "markdown",
        source: "1. Read template-essay.html\n2. Read _base.css and _essay.css\n3. Read _runtime.js and _essay.js\n4. Replace template slots",
        highlights: [
          { line: 2, note: "CSS partials define the Raycast-themed reading surface." },
          { line: 3, note: "Runtime partials keep each output page interactive without a build step." }
        ]
      },
      explanation:
        "This is the key move: reusable partials become inline page assets, so the final course page opens as one file."
    },
    {
      name: "Validate before emit",
      mermaid:
`flowchart LR
  A["PAGE_DATA"] --> B["validate-units.js"]
  B -->|ok| C["write HTML"]
  B -->|errors| D["stop"]`,
      code: {
        file: "skills/codemermaid/scripts/validate-units.js",
        lang: "js",
        source: "if (!result.ok) {\n  console.error('Validation failed:');\n  for (const e of result.errors) console.error(`  - ${e}`);\n  process.exit(1);\n}\nconsole.log('OK');",
        highlights: [
          { line: 1, note: "Validation gates output instead of warning after the page exists." },
          { lines: [2, 3, 4], note: "The run prints every failure, then exits once." }
        ]
      },
      explanation:
        "Bad pedagogy fails before the page is written. That keeps the generator honest when it starts producing richer units."
    }
  ]
}
```
