import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema(
    {
        blogTitle: {
            type: String,
        },
        blogDesc: {
            type: String,
        },
        blogContent: {
            type: String,
        },
        blogMedia: { type: String },
        blogMediaPublicId: { type: String },
    },
    { timestamps: true }
)

const Blog = mongoose.model('Blog', BlogSchema)

export default Blog