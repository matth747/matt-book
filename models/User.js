const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
        friends: [],
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            //need to add mongoose email validator
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    })

    userSchema.virtual('friendCount').get(function () {
        return this.friends.length
    })
    const User = model('user', userSchema)
    
    module.exports = User;
    