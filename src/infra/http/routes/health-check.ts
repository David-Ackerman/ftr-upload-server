import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { object, z } from 'zod'

export const healthCheckRoute: FastifyPluginAsyncZod = async server => {
  server.get(
    '/health',
    {
      schema: {
        summary: 'Health check',
        tags: ['health'],
        response: {
          200: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      return reply.status(200).send({ message: 'ok' })
    }
  )
}
