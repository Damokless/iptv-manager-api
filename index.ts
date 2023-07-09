
import Fastify from 'fastify'
import playlistToJson from './services/playlistToJson'
import fastifyCors from '@fastify/cors'

const fastify = Fastify({logger: true})
fastify.register(fastifyCors, {origin: '*'})

fastify.post('/playlistToJson', async (req) => {return playlistToJson(req.body)});

const start = async () => {
  try {
    await fastify.listen({ port: 4000 })
  } catch (err) {
    fastify.log.error(err)
  }
}
start()