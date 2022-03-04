const { Schema, model } = require("mongoose");

const MovieSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        imageTitle: {
            type: String,
        },
        imageSmall: {
            type: String,
        },
        trailer: {
            type: String,
        },
        video: {
            type: String,
        },
        year: {
            type: String,
        },
        limit: {
            type: Number,
        },
        genre: {
            type: String,
        },
        isSeries: {
            type: Boolean, 
            default: false,
        },

    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const User = model("Movie", MovieSchema);

module.exports = User;
