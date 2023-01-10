const { Schema, model } = require('mongoose');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      required: true,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //need:  Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [{type: Schema.Types.ObjectId, ref: 'reaction'}],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });
// Initialize our Post model
const Post = model('post', postSchema);

module.exports = Post;
