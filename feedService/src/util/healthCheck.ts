import * as http from 'http'

export const healthCheck = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('OK')
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' })
    res.end('Not Found')
  }
})

