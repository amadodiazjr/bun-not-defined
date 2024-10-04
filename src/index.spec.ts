import { createBunWebSocket } from 'hono/bun'

describe('index', () => {
  it("should not FAIL", () => {
    createBunWebSocket()    
  })
})