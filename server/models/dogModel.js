const mongoose = require("mongoose");

const weightSchema = new mongoose.Schema({
	date: {
		type: String,
		required: true,
	},
	weight: {
		type: Number,
		required: true,
	},
});

const recordSchema = new mongoose.Schema({
	content: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	cost: {
		type: Number,
		required: true,
	},
	hospital: {
		type: String,
		required: true,
	},
});
const foodSchema = new mongoose.Schema(
	{
		category: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const memoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
const dogSchema = new mongoose.Schema(
	{
		imageUrl: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		birthday: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		weights: [weightSchema],
		records: [recordSchema],
		foods: [foodSchema],
		memos: [memoSchema],
	},
	{
		collection: "Dogs",
		timestamps: true,
	}
);

const Dog = mongoose.model("Dogs", dogSchema);

module.exports = Dog;
