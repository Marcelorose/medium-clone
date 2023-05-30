const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'A user must have a first name'],
    },
    lastName: {
      type: String,
      required: [true, 'A user must have a last name'],
    },
    email: {
      type: String,
      required: [true, 'A user must have a email'],
    },
    password: {
      type: String,
      required: [true, 'A user must have a password'],
    },
    passwordConfirmation: {
      type: String,
      required: [true, 'A user must have a password confirmation'],
    },
    followedTopics: {
      type: [Schema.ObjectId],
      ref: 'Topic',
    },
    followedUsers: {
      type: [Schema.ObjectId],
      ref: 'User',
    },
    posts: {
      type: [Schema.ObjectId],
      ref: 'Post',
    },
    savedPosts: {
      type: [Schema.ObjectId],
      ref: 'Post',
    },
    clappedPosts: {
      type: [Schema.ObjectId],
      ref: 'Post',
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

const User = mongoose.model('User', userSchema);

module.exports = User;
