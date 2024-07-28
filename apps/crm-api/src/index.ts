import express from 'express'
require('express-async-errors')
import { dbClient } from '@fennerwe-indigov/crm-models'
import { ConstituentController } from './api/constituents.controller'
import { z } from 'zod'
import { LogType, structuredLog } from './lib/logging'
import { HealthController } from './api/health.controller'

async function start() {
    const app = express()
    const port = 3000

    await dbClient.$connect()

    app.use(express.json())

    app.all('*', (req, res, next) => {
        structuredLog({
            type: LogType.Log,
            tag: 'crm-api',
            message: 'Incoming request',
            metadata: {
                path: req.url,
                body: req.body
            }
        })
        next()
    })

    new HealthController(app)
    new ConstituentController(app)

    app.use((err: Error, req: any, res: any, next: any) => {
        console.error('Error:', err)
        if (err instanceof z.ZodError) {
            res.status(500).send(err.message)
        } else {
            res.status(500).send()
        }
    })

    app.listen(port, () => {
        console.log(`Express listening on port ${port}`)
    })
}

void start()
