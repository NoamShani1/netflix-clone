const { Schema, model } = require("mongoose");

const ListSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
        },
        content: {
            type: Array, 
    
        },

    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const User = model("List", ListSchema);

module.exports = User;
