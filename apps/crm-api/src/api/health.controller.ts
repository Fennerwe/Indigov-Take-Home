import { Express } from 'express'

export class HealthController {
    constructor(app: Express) {
        app.get('/health', (req, res) => {
            return res.status(200).send()
        })
    }
}
