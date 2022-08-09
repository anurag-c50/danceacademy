const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
var mongoose =require('mongoose');
const bodyparser = require('body-parser');
var DB ='mongodb+srv://anuragjha:anuragjha%402002@cluster0.1lrdu.mongodb.net/Anurag-Dance-Academy?retryWrites=true&w=majority';
mongoose.connect(DB , {
    useNewurlParser: true,
        useUnifiedTopology: true,
}).then(()=>{
  console.log('connection successful');
}).catch((err) => console.log('no connection',err));
const port = 80;


var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    concern: String
})

var Contacts = mongoose.model('Contact',contactSchema);

app.use('/static',express.static('static'))
app.use(express.urlencoded({extended:false}));

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{

     res.status(200).render('index.pug');
})
app.get('/Contactus',(req,res)=>{
    res.status(200).render('Contactus.pug');
})
app.post('/Contactus', (req, res)=>{
    var myData = new Contacts(req.body); 
    myData.save().then(()=>{
        res.send('This iteam has been saved to the database')
    }).catch(()=>{
        res.status(400).send("Iteam was not saved to the database")
    });
})
app.listen(port,()=>{
    console.log("The application successfully run on 80");
})
