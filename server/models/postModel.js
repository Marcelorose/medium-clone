const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'A post must have a title'],
    },
    body: {
      type: String,
      required: [true, 'A post must have a body'],
    },
    image: {
      type: [String],
    },
    comments: {
      user: {
        type: Schema.ObjectId,
        ref: 'User',
      },
      body: {
        type: String,
      }
    },
    user: {
      type: Schema.ObjectId,
      ref: 'User',
      required: [true, 'A post must have a author'],
    },
    topics: {
      type: [Schema.ObjectId],
      ref: 'Topic',
      validate: {
        validator: function(v) {
          return v.length > 0;
        },
        message: 'A post must have at least one topic'
      },
    },
    claps: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
