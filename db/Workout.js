const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  distance: Number,
  weight: Number,
  sets: Number,
  reps: Number,
});

const workoutSchema = new Schema({ exercises: [exerciseSchema] });

module.exports = mongoose.model('Workout', workoutSchema);
