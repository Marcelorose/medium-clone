const mongoose = require('mongoose');
const { Schema } = mongoose;

const topicSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'A topic must have a name'],
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

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
