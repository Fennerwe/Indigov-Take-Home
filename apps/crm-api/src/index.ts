import express from 'express'

function start() {
    const app = express()
    const port = 3000

    app.use('/hello', (req, res) => {
        res.send('Hello World')
    })

    app.use()

    app.listen(port, () => {
        console.log(`Express listening on port ${port}`)
    })
}

start()