const jwt = require('jsonwebtoken');
const Weight = require('../models/employees');
const User = require('../models/users');
const path = require("path");
exports.getdefault=function(req, res){
   res.sendFile(path.join(__dirname + '/../HTML/index.html'));
};



//
exports.aboutus=function(req, res){
    res.send('You are on the about us route.');
};
//
exports.employees=function(req, res){
    res.send('You are viewing employee# ' + req.params.employeeName);
};
//
exports.getallrecords=function(request, response){
	Weight.find({}, function(err, results){
		if (err)
		    response.end(err);
		response.json(results);
	});
	//res.send('You are on the getallrecords route.');
};
exports.deletebyname=function(req, res){
  let empToDelete = req.params.employeeName;
  Weight.deleteOne({empName:empToDelete}, function(err, result) {
    if (err)
      res.send(err);
    res.end(`Deleted ${empToDelete}`);
  });
};

exports.putnewdoc = function(req,res){
	let empName = req.body.empName;
	let empWeight = req.body.empWeight;
	const weight = new Weight();
	weight.empName = empName;
	weight.empWeight = empWeight;
 	weight.save({}, function(err) {
		if (err)
			res.end(err);
		res.end(`Created ${empName}`);
  });
};
exports.updatedoc = function(req, res) {
  let fixName = req.body.fixname;
  let newWeight = req.body.newweight;
  let query = { empName : fixName };
  let data = { $set : {empWeight : newWeight } }

  Weight.updateOne(query, data, function(err, result) {
     if (err)
  res.send(err);
     res.end(`Updated ${fixName}`);
});
};

exports.putnewuser = function(req,res){
	let empName = req.body.empName;
	let empPass = req.body.empPass;
	const user = new User();
	user.empName = empName;
	user.empPass = empPass;
 	user.save({}, function(err) {
		if (err)
			res.end(err);
		res.end(`Created new user ${empName}`);
  });
};

exports.loginuser = function(req,res){
	let empName = req.body.empName;
	let empPass = req.body.empPass;
	User.find({empName:empName}, function(err, results){
	  if (err)
	    res.end(err);
	if(results[0].empPass == empPass){
      //user exists so now use jsonwebtoken
      jwt.sign({
       empName:results[0].empName,
       userID:results[0]._id
      },
      "mysecret",
      {expiresIn : "1h"},
      function(err, token){
        if(err) throw err;
        res.end(token);
      }
)


    } else {
      res.end("Login failed");
    }
	});
};
