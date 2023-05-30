const Topic = require('../models/topicModel');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

exports.getAllTopics = factory.getAll(Topic);
exports.getTopic = factory.getOne(Topic);
exports.createTopic = factory.createOne(Topic);
exports.updateTopic = factory.updateOne(Topic);
exports.deleteTopic = factory.deleteOne(Topic);
