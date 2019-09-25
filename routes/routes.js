module.exports = function(app){
    const express= require('express');
    app.use(express.static(__dirname + '/../HTML'));
    let controller = require('../controllers/controllers');
    let authUser = require('../controllers/auth');
    app.route('/').get(controller.getdefault);
    app.route('/aboutus').get(authUser, controller.aboutus);
    app.route('/employees/:employeeName').get(controller.employees);
    app.route('/getallrecords').get(controller.getallrecords);
    app.route('/deletebyname/:employeeName').delete(controller.deletebyname);
    app.route('/putnewdoc').post(controller.putnewdoc);
    app.route('/updatedoc').put(controller.updatedoc);
    app.route('/putnewuser').post(controller.putnewuser);
    app.route('/loginuser').post(controller.loginuser);

    //
};
