import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const USERNAME = process.env.USER_NAME
const PASSWORD = encodeURIComponent(process.env.USER_PASSWORD)


const connectDB = async server => {
    try {
        const conn = await mongoose.connect(
            `mongodb+srv://${USERNAME}:${PASSWORD}@soocial-cluster.vvrdqx9.mongodb.net/app`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        console.log(`Database running on: ${conn.connection.host}`)
        await server()

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


export default connectDB;