const express = require('express');
const app = express();
const path = require('path');
const scraper = require('./js/scraper');
const apis = require('./js/apis');
const bodyParser = require('body-parser');
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
  res.render('index', {status:'',img:'',business:[], news:[],business:['Cruelty Free'],images:['https://i.pinimg.com/originals/14/0d/2b/140d2b4f954537558d775a1551cc3c1f.jpg']});
  //console.log(req.body);

});
// post
const CRY ='https://giphy.com/embed/TRgyI2f0hRHBS';
const HAPPY = 'https://giphy.com/embed/1136UBdSNn6Bu8';
const WAIT = 'https://giphy.com/embed/PWfHC8ogZpWcE';
app.post('/search', async(req,res)=>{
  //console.log(test);
  // Status de la empresa
  var img =WAIT;
  var status = await scraper.search(1,req.body.marca);
  if(status[0].includes('Warning!')){
    img =CRY;
  }else if (status[0].includes('NOT test')) {
    img = HAPPY;
  }else if (status[0].includes('found')) {
    img = '';
  }
  /// Empresas cruelty Free
  var business = await scraper.search(2,'Ecuador');
  var image = [];
  //console.log(business);
  for(var i=0; i<business.length;i++){
    var aux = await apis.getImage(business[i]);
    image.push({ aux });
  }
  //console.log(imagen);
  // business.forEach( (elem)=>{
  //   var z = apis.getImage(elem);
  //   //console.log(elem);
  // } );
  //console.log(business);

  ///// Noticias relacionadas
  var news = await scraper.search(0,req.body.marca);
  return res.render('index',{status: status[0], img:img, business: business, news:news, business:business, images : image});
});
// static files
app.use(express.static(path.join(__dirname,'public')));
app.listen(app.get('port'), ()=>{
  console.log('Corriendo...', app.get('port'));
});
