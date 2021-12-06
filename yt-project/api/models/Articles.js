const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Date } = Schema.Types;

const articleSchema = new Schema(
	{
		description: {
			type: String,
			required: true,
		},

		imageURL: {
			type: String,
			required: true,
		},

		title: {
			type: String,
			required: true,
			unique: true,
		},
		dateCreated: {
			type: String,
		},
		// dateCreated: { type: Date, default: Date.now },
	},
	{ timestamps: true }
);

module.exports = new Model("Articles", articleSchema);

// today: new Date(),
