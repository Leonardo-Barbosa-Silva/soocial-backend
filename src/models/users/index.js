import mongoose from 'mongoose';


const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        email: {
            type: String,
            required: true,
            max: 60,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 5
        },
        picturePath: {
            type: String,
            default: ""
        },
        friends: {
            type: Array,
            default: []
        },
        location: {
            type: String
        },
        occupation: {
            type: String
        },
        viewedProfile: {
            type: Number
        },
        impressions: {
            type: Number
        }
    },
    {
        timestamps: true
    }
)


export default mongoose.model("users", userSchema)