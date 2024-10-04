import { Hono } from 'hono'
import { createBunWebSocket } from 'hono/bun'

const app = new Hono()

createBunWebSocket()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
