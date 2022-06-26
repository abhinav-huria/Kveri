const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  answer: {
		type: String,
		required: true
	},
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

module.exports = mongoose.model("Answers", AnswerSchema);
