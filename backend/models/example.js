const mongoose = require('mongoose');

const exampleSchema = mongoose.Schema({
	example1: { type: Number, default: 1 },
	example2: { type: String, required: true },
	example3: { type: {}, default: { date: Date.now() } },
	example4: { type: [], default: [] },
});

module.exports = mongoose.model('Example', exampleSchema);
