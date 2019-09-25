const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Weights', { useNewUrlParser: true });
const wSchema = new mongoose.Schema({
  empName: String,
  empPass: String
},{
	collection:'EmployeeUsers'
});
module.exports = mongoose.model('Users', wSchema);
