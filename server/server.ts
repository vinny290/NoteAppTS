import { Application } from 'express'
import jsonServer from 'json-server'

const server: Application = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port: number = 4000
server.listen(port, () => {
	console.log(`JSON Server is running on port ${port}`)
})
