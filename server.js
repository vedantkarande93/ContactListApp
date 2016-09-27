var express =require('express');
var app = express();
var port = process.env.PORT || 3000
var bodyParser = require('body-parser');

var index = require('./routes/index.js')

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist',index.getAllContacts)
app.post("/contactlist", index.addContacts)        
app.delete('/contactlist/:id', index.deleteContact)
app.put('/contactlist/:id', index.updateContact)

app.listen(port, function(){
	console.log("Server running on port 3000");	
});



