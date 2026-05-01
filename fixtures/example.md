# Getting Started

## Installation

Install the package using your preferred package manager:

```bash
pnpm add -D @aiou/eslint-config
```

## Usage

Create an `eslint.config.mjs` in your project root:

```js
import { aiou } from '@aiou/eslint-config'

export default aiou()
```

## Options

```ts
export default aiou({
  ssr: true,
  regexp: true,
})
```

## React Example

```tsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}

export default Counter
```

## Ignoring Files

Use a `.eslintignore` or configure ignores in flat config:

```json
{
  "ignores": ["dist/**", "node_modules/**"]
}
```
