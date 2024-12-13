let express = require ("express")
let app = express();
let path = require ("path")
console.log(__dirname)
let hbs=require("hbs")

// let connectdb = require("./connection/connectdb")
// connectdb()

// let saveDoc = require("./models/model")
// saveDoc()

//view engine
app.set("view engine","hbs")
app.set("views",path.join(__dirname,"../views"))

//for joining images and css 

app.use(express.static (path.join(__dirname, "../public")))

hbs.registerPartials(path.join(__dirname,"../templates/partials"))
    
    app.get("/",(req,res)=>{
        res.render("home")
    })

    app.get("/about",(req,res)=>{
       res.render("about")
    })

    app.get("/cup",(req,res)=>{
        res.render("cup")
     })
 

    app.get("/login", (req,res)=>{
        res.sendFile(path.join(__dirname, "../public/login.html")
    )
    })
  
    app.get("/contact",(req,res)=>{
       
     res.sendFile(path.join(__dirname,"../public/booktable.html"))
    })

    app.get('/signup',function(req,res){
        // res.set({
        // 	'Access-control-Allow-Origin': '*'
        // 	});
         res.sendFile(path.join(__dirname,'index.html'));
        })

    
var bodyParser=require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sravyanth:Sravyanth%4004@cluster0.gdxtcwu.mongodb.net/test');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;
	var phone =req.body.phone;

	var data = {
		"name": name,
		"email":email,
		"password":pass,
		"phone":phone
	}
db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	res.sendFile(path.join(__dirname,'signup_success.html'));
})

app.listen("60", ()=>{console.log('connected...')

})