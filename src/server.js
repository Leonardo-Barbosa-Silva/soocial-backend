import express from 'express';
import limiterExpress from 'express-rate-limit';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './configs/mongodb.js';
import router from './router/router.js';
dotenv.config()


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = process.env.PORT || 6001
const limiterGlobal = limiterExpress({
    windowMs: 15 * 60 * 1000,
    max: 1000
})
const allowedClients = process.env.ALLOWED_CLIENTS.split(',')
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedClients.includes(origin) || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Client not allowed'))
        }
    }
}

app.use(helmet())
app.use(cors(corsOptions))
app.use(morgan(process.env.NODE_ENV == "development" ? "dev" : "common"))
app.use(limiterGlobal)
app.use(express.json({ limit: "30mb" }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use('/assets', express.static(path.join(__dirname, '../public/assets')))
app.use('/soocial', router)


connectDB(async () => {
    app.listen(port, () => {
        console.log(`Server running on port: ${port}...`)
    })
})