const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
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
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
/*         friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Friend?'
            }
        ] */
        
    }
)
const User = model('user', userSchema)

module.exports = User;
