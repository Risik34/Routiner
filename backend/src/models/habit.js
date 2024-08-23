const mongoose = require('mongoose');

const habitSchema = mongoose.Schema({
  title: {
    rquired: true,
    type: String,
  },
  isBad: {
    type: Boolean,
    default: false,
  },
  isIncremental: {
    type: Boolean,
    default: false,
  },
  incrementValue: Number,
  unit: String,
  habitEntry: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HabitEntry',
    },
  ],
});

const habitEntry=mongoose.Schema({
  date:{
    type:Date,
    required:true,
    default:Date.now()
  },
  isCompleted:Boolean,
currentValue:{
    type:Number,
  }

},{timestamps:true})
const Habit = mongoose.model('Habit', habitSchema);

module.exports=Habit
