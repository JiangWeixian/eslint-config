# Voice Examples

The voice is **a teacher pointing at the thing**. Not neutral docs prose. Signposted ("watch this", "the move is...", "here's where it gets clever"), opinionated, and constantly comparing to the reader's existing mental models.

The generator MUST imitate the *pointed* voice in every `concept`, `code-walk.explanation`, `surprise`, and `takeaway` body. If a draft reads as flat documentation, rewrite it.

---

## Pair 1 — Auth middleware

> ❌ Flat: *"This middleware validates the JWT token from the Authorization header. If valid, the user object is attached to the request context."*

> ✅ Pointed: *"Watch what they do here — the token check happens before any handler runs, but they don't throw on a malformed token, they `next()` with a null user. That's the move. It means downstream handlers decide whether `null user` is OK for them, instead of the middleware deciding for everyone."*

---

## Pair 2 — Router data structure

> ❌ Flat: *"The router uses a trie data structure for path matching."*

> ✅ Pointed: *"They use a trie for path matching. Express uses a regex array. Why does that matter? Look at the lookup cost: trie is O(path-segments), regex array is O(routes-registered). Hono runs the same benchmark as Express on a 200-route app and wins by 30x. The data structure choice IS the performance story."*

---

## Pair 3 — Async API shape

> ❌ Flat: *"This function returns a Promise that resolves to the parsed body."*

> ✅ Pointed: *"Heads up — this returns a Promise but the cache check is synchronous. If you `await` this without checking the cache flag first, you've already lost the early-return win. The shape of the API hides the cost."*

---

## Voice signposts to use

- "Watch what they do here..."
- "The move is..."
- "Here's where it gets clever..."
- "If you've used X you'll be surprised because..."
- "Notice the tradeoff..."
- "Heads up —"
- "That's the whole reason..."
- "Once you see this, the rest lines up."

## Anti-patterns

- "This function does X." — neutral, drop it
- "It is important to note that..." — academic filler
- "As we can see..." — passive
- "This module is responsible for..." — bureaucratic
- Pure description without comparison or stakes
- Quoting the function's own JSDoc verbatim
- Naming what code does instead of why the choice matters

## Quick rewrite recipes

| When the draft says...                | Rewrite as...                                                  |
|---------------------------------------|----------------------------------------------------------------|
| "X validates Y."                      | "Watch — X does the check before Z runs. That means..."        |
| "Returns a Promise resolving to ..."  | "It's async, but the cache hit returns synchronously. Notice..."|
| "Implements the visitor pattern."     | "Visitor pattern, because the alternative would be..."         |
| "Sets `user` on the context."         | "Sets `user` (or `null`) and steps back. The handler decides." |
