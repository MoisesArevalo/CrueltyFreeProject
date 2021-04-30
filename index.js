const express = require('express');
const app = express();
const path = require('path');
const scraper = require('./js/scraper');
const apis = require('./js/apis');
const bodyParser = require('body-parser');
/// configuracion
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
//app.use(express.urlencoded());
app.use(express.json());
// route
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'index.html'));
  //console.log(scaper.test())
  const products =[];
  res.render('index', {
    status: '',
    img: '',
    business: [],
    news: [],
    business: ['Cruelty Free'],
    images: {'Cruelty Free':'https://i.pinimg.com/originals/14/0d/2b/140d2b4f954537558d775a1551cc3c1f.jpg'},
    products: products
  });
  //console.log(req.body);

});
// post
const CRY = 'https://giphy.com/embed/TRgyI2f0hRHBS';
const HAPPY = 'https://giphy.com/embed/1136UBdSNn6Bu8';
const WAIT = 'https://giphy.com/embed/PWfHC8ogZpWcE';
const images={
  'Aggi Natural Beauty': 'https://cdn.shopify.com/s/files/1/2808/4338/files/Artboard_9_2x-100_300x300.jpg?v=1571336886',
  'Amorus USA' : 'https://meandmi.com.mx/wp-content/uploads/2020/07/amorus.png',
  'Australian Bush Flower Essences' : 'http://static1.squarespace.com/static/5d1f6d7a1309d10001931097/5ec6bfba6bc82250f5f3a707/5eb9565d3e021120eb693963/1591025247034/?format=1500w',
  'HandMade Beauty' : 'https://consumeconcoco.com/wp-content/uploads/2019/11/PORTADA-1-1.jpg',
  'Laura Sanchez Makeup' : 'https://i.ytimg.com/vi/mUx-Pff3N5g/maxresdefault.jpg',
  'Prestige Cosmetics' : 'https://www.prestigecosmeticscr.com/franquias/2/426223/editor-html/6029453.png',
  'Renpure' : 'https://mma.prnewswire.com/media/834360/Renpure_Products.jpg?p=publish',
  'SEYTÚ Cosmetica' : 'https://seytu.omnilife.com/themes/omnilife2018/images/logos/seytu.png',
  'TONOS REVOLUTION MAKEUP' : 'https://estilodelpeluquero.com/blog/wp-content/uploads/2020/06/New-Project-54.jpg',
  'Zuii Organic' : 'https://www.exentiacosmetic.ch/.cm4all/uproc.php/0/Zuii/.newsletter-logo.png/picture-1200?_=167238b7000'

};
app.post('/search', async (req, res) => {
  //console.log(test);
  // Status de la empresa
  var gif = WAIT;
  var status = await scraper.search(1, req.body.marca);
  if (status[0].includes('Warning!')) {
    gif = CRY;
  } else if (status[0].includes('NOT test')) {
    gif = HAPPY;
  } else if (status[0].includes('found')) {
    gif = '';
  }
  /// Empresas cruelty Free
  var business = await scraper.search(2, 'Ecuador');
  // var image = [];
  // for(var i=0; i<business.length;i++){
  //   var aux = await apis.getImage(business[i]);
  //   image.push(aux);
  // }
  // console.log(image)
  /// *** Productos relacionados
  console.log(req.body.producto);
  const products = await apis.getProducts(req.body.producto);
  //console.log(products);
  //console.log(typeof products);
  //const products = apis.getValuesProduct('');
  ///// Noticias relacionadas
  var news = await scraper.search(0, req.body.marca);
  return res.render('index', {
    status: status[0],
    img: gif,
    business: business,
    news: news,
    business: business,
    images:images,
    products: products
  }); //, images : image
});
// static files
app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'), () => {
  console.log('Corriendo...', app.get('port'));
});
