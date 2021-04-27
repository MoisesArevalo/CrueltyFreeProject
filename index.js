const express = require('express');
const app = express();
const path = require('path');
const scraper = require('./js/scraper');
const bodyParser = require('body-parser')
/// configuracion
app.set('port',3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
//app.use(express.urlencoded());
app.use(express.json());
// route
app.get('/',(req,res)=>{
  // res.sendFile(path.join(__dirname, 'index.html'));
  //console.log(scaper.test())
  res.render('index', {status:'',img:''});
  //console.log(req.body);

});
// post
const CRY ='https://giphy.com/embed/TRgyI2f0hRHBS';
const HAPPY = 'https://giphy.com/embed/1136UBdSNn6Bu8';
const WAIT = 'https://giphy.com/embed/PWfHC8ogZpWcE';
app.post('/search', async(req,res)=>{
  //console.log(test);
  //var ts ="This company is working toward regulatory changes to reduce the number of animals used for testing.";
  var img =WAIT;
  var status = await scraper.search(1,req.body.marca);
  if(status[0].includes('Warning!')){
    img =CRY;
  }else if (status[0].includes('NOT test')) {
    img = HAPPY;
  }else if (status[0].includes('found')) {
    img = '';
  }
  console.log(img);
  return res.render('index',{status: status[0], img:img});
});
// static files
app.use(express.static(path.join(__dirname,'public')));
app.listen(app.get('port'), ()=>{
  console.log('Corriendo...', app.get('port'));
});
