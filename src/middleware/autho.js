import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UsersModel from '../models/users/index.js';
dotenv.config();


export default (req, res, next) => {
    try {
        const headerAuth = req.headers.authorization && req.headers.authorization.toString()

        if (!headerAuth) {
            return res.status(401).json({ message: "No token provided" })
        };

        const parts = headerAuth.split(' ')

        if (parts.length !== 2) {
            return res.status(401).json({ message: "Invalid token format" })
        };

        const [ scheme, token ] = parts

        if (!/^Bearer$/i.test(scheme)) {
            return res.status(401).json({ message: "Token malformatted" })
        }

        jwt.verify(token, process.env.JWT_SECRET , async (err, decoded) => {
            if (err) return res.status(401).json({ message: "Token invalid" })

            req.user = await UsersModel.findById(decoded.id).select('-password')

            next()
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal server error" })
    }
}