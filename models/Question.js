const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionName: {
		type: String,
		required: true
	},
  questionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answers",
  },
  user: Object,
});

module.exports = mongoose.model("Questions", QuestionSchema);
