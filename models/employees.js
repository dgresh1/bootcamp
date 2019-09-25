const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Weights', { useNewUrlParser: true });
const wSchema = new mongoose.Schema({
  empName: String,
  empWeight: Number,
  created: {type: Date, default: Date.now }
},{
	collection:'EmployeeWeights'
});
module.exports = mongoose.model('Weights', wSchema);
