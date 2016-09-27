var express = require('express');
var mongojs = require('mongojs');
var db= mongojs("contactlist", ['contactlist']);


exports.getAllContacts = function(req, res){
	db.contactlist.find(function(err, docs){
	    res.send(docs);
	});
}

exports.addContacts = function(req, res){
	db.contactlist.insert(req.body, function(err, doc){
		res.send(doc);
	});
}

exports.deleteContact = function(req, res){
	var id = req.params.id;
	db.contactlist.remove({_id : mongojs.ObjectId(id)}, function(err, doc){
		res.send(doc);

	});
}

exports.updateContact = function(req, res){
	var id = req.params.id;
	db.contactlist.findAndModify({query : {_id : mongojs.ObjectId(id)},
	update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number }}, 
    new: true}, function(err, doc){
		res.send(doc);

	});
}
