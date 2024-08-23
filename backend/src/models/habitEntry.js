const Habit = require("./habit");

const habitEntrySchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    isCompleted: Boolean,
    currentValue: {
      type: Number,
    },
  },
  { timestamps: true },
);

const HabitEntry=mongoose.model("HabitEntry",habitEntrySchema)

module.exports=HabitEntry
