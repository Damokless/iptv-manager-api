// modules imports
import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'

// services
import playlistToJson from './services/playlistToJson'
import proxy from './services/playlistCheker'

// fastify config
const fastify = Fastify({logger: true})
fastify.register(fastifyCors, {origin: '*'})

// routes
fastify.post('/playlistToJson', async (req) => {return playlistToJson(req.body)});
fastify.post('/playlistChecker', async (req) => {return proxy(req.body)});

// start server and listen port 4000
const start = async () => {
  try {
    await fastify.listen({ port: 4000 })
  } catch (err) {
    fastify.log.error(err)
  }
}
start()