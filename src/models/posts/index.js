import mongoose from 'mongoose';


const postSchema = mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        },
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
        location: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            max: 1000,
            default: ""
        },
        userPicturePath: {
            type: String,
            default: ""
        },
        picturePath: {
            type: String,
            default: ""
        },
        likes: {
            type: Map,
            of: Boolean
        },
        comments: {
            type: Array,
            default: []
        }
    },
    {
        timestamps: true
    }
)


export default mongoose.model("posts", postSchema)