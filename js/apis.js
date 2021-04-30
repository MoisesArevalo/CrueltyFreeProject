const request = require('request');
const axios = require("axios").default;
////////
const test =
{
  docs: [
    {
      app_sale_price: 2.87,
      app_sale_price_currency: 'USD',
      product_id: 1005002551912276,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H10ff68f6127743f49e685b19893c12edk.jpg',
      product_title: '1Pcs New Arrival Wine Red Korean Style Lip Tint Baby Pink Lip For Women Makeup Liquid Lipstick Lip gloss red lips Cosmetic Hot',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002551912276.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 3.09,
      app_sale_price_currency: 'USD',
      discount_rate: 34,
      product_id: 1005002550741264,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H17a59842aa2a46f695a3ed8f9f14f252o.jpg',
      product_title: 'Matte Velvet Chocolate Lip Gloss  Sexy Red Waterproof Pigmented Liquid Lipstick 3 Colors No-stick Cup Easy To Color Lips Make Up',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002550741264.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 1.94,
      app_sale_price_currency: 'USD',
      discount_rate: 35,
      product_id: 1005002549738384,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H62579a22c2bf46c5a3f987e94717266fj.jpg',
      product_title: 'Pudaier New Hot Sale Fashion Lipstick Cosmetics Lip Gloss Matte  Waterproof Sexy Lipstick Long Lasting Not Fade Beauty Makeup',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549738384.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 9.76,
      app_sale_price_currency: 'USD',
      discount_rate: 30,
      product_id: 1005002549561953,
      product_main_image_url: 'https://ae01.alicdn.com/kf/Hc14153fccee54ce482dbe3a976fd7a61m.jpg',
      product_title: '7PCS/Set Niceface Liquid Lipstick Matte Lipstick Niceface Lip Gloss Velvet Matte Lip Glaze Set for A Week',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549561953.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 9.77,
      app_sale_price_currency: 'USD',
      product_id: 1005002549484664,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H5efd4d14d3374b65848514c4b1d8017dB.jpg',
      product_title: 'Lip Stick Set Matte Waterproof Moisturizing Lipstick Sexy Nude Velvet Lip Long-lasting Nonstick Cup Lip Gloss Makeup Beauty',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549484664.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 1.71,
      app_sale_price_currency: 'USD',
      discount_rate: 46,
      product_id: 1005002549494177,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H48f18aedd6b04f9cbfe439afecdabe53V.jpg',
      product_title: 'Matte Velvet Liquid Lipsticks Glaze Waterproof Long Lasting Nude Lip Gloss Makeup Nonstick Cup Sexy Red Lip Tint Cosmetics',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549494177.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 1.81,
      app_sale_price_currency: 'USD',
      discount_rate: 46,
      product_id: 1005002549476222,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H61eed0ae4e5d485095b0b1094247d8c1b.jpg',
      product_title: '12 Colors Velvet Matte Lipsticks Pencil Waterproof Long Lasting Sexy Red Lip Stick on-Stick Cup Makeup Lip Tint Pen Cosmetic',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549476222.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 2.14,
      app_sale_price_currency: 'USD',
      discount_rate: 46,
      product_id: 1005002549517077,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H6059e725ec544d26b427f8eb8588d665c.jpg',
      product_title: '6 Colors Petal Matte Lipstick Lips Make Up Hydrating Long Lasting Velvet Lip Stick Nude Red Lips Makeup Matt Lipsticks',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549517077.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 1.71,
      app_sale_price_currency: 'USD',
      discount_rate: 46,
      product_id: 1005002549486263,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H634773d6298941c2bc81406f7d57d652q.jpg',
      product_title: 'Matte Lipstick Lipcream Velvet Waterproof Lip Glaze Professional Makeup Long Lasting Gloss Maquiagem Liquid Lipstick',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549486263.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 1.71,
      app_sale_price_currency: 'USD',
      discount_rate: 46,
      product_id: 1005002549409680,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H7f5a8da8f74747e39bb65a43ed90649er.jpg',
      product_title: 'New 18 Color Liquid Lipstick Matte Makeup Waterproof Red Lip Long Lasting Gloss Mate Lip Stick Matte Liquid Lipsticks',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549409680.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 1.71,
      app_sale_price_currency: 'USD',
      discount_rate: 46,
      product_id: 1005002549424631,
      product_main_image_url: 'https://ae01.alicdn.com/kf/Haab6f5967e224811a615241580fd525aK.jpg',
      product_title: '18 Colors Matte Velvet Lip Gloss Nude Liquid Lipsticks Waterproof Long Lasting Nonstick Cup Lipgloss Makeup Sexy Lip Tint Glaze',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549424631.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 1.71,
      app_sale_price_currency: 'USD',
      discount_rate: 46,
      product_id: 1005002549421605,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H65e9517d1d0a4455b63cebbd80a47de7Q.jpg',
      product_title: 'New Nude Color lipstick waterproof lipstick liquid lipstick matte lipstick makeup lipstick female professional cosmetics',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549421605.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 1.71,
      app_sale_price_currency: 'USD',
      discount_rate: 46,
      product_id: 1005002549433503,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H1f7ddea4d08c42e0be294f663cc085141.jpg',
      product_title: '18 Colors Lipstick Waterproof Long Lasting Natural Matte Shimmer Sexy Women Moist Lip Gloss Nude Glitter Beauty Red Lip Tint',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549433503.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 0.97,
      app_sale_price_currency: 'USD',
      discount_rate: 45,
      product_id: 1005002549244256,
      product_main_image_url: 'https://ae01.alicdn.com/kf/Hfd4d88e4250b4256b2fbb377cc9251ecS.jpg',
      product_title: '3PCS Lip Glaze Velvet Matte Lipstick Waterproof Long Lasting Not Stick Cup Lip Glaze Lip Gloss Liquid Lip Stick Makeup Cosmetics',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549244256.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 1.9,
      app_sale_price_currency: 'USD',
      product_id: 1005002548944825,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H928db54569df43c3b5d8aa26d1aa566aS.png',
      product_title: 'Lipstick Shiny metal pearlescent temperature-changing lipstick',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002548944825.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 10.61,
      app_sale_price_currency: 'USD',
      discount_rate: 33,
      product_id: 1005002549045677,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H4ec7d35d7fc64bdc9c249fe377dd0a0a8.jpg',
      product_title: 'COLORKEY Liquid Lipstick Moisturizing Moist Matte Liquid Lipstick Multi-colors Long Lasting Waterproof  Lip Cosmetics TSLM1',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549045677.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 6.85,
      app_sale_price_currency: 'USD',
      discount_rate: 36,
      product_id: 1005002548997650,
      product_main_image_url: 'https://ae01.alicdn.com/kf/Ha06fbfa9f6364d76bfa0c012dc0a66b9d.jpg',
      product_title: '6PCS Liquid Lipstick Set Lips Gloss Matte Nude Velvet Lip Gloss Lips Cosmetic Tint Waterproof Moisturizing Makeup Lipstick',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002548997650.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 0.68,
      app_sale_price_currency: 'USD',
      discount_rate: 48,
      product_id: 1005002549012690,
      product_main_image_url: 'https://ae01.alicdn.com/kf/Hc54a8970b5ec463991d3e627cfffa72bh.jpg',
      product_title: 'PINKFLASH Airy Dual-use Lip Gloss Waterproof Long-lasting Liquid Lipstick Matte Nude Non-fading Lip Glaze Sexy Lip Makeup TSLM2',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549012690.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 0.68,
      app_sale_price_currency: 'USD',
      discount_rate: 48,
      product_id: 1005002549088143,
      product_main_image_url: 'https://ae01.alicdn.com/kf/H0327b33397554b5fadd52ee0846039eaq.jpg',
      product_title: 'PINKFLASH Airy Dual-use Lip Glaze Waterproof Long-lasting Liquid Lipstick Matte Nude Non-fading Lip Gloss Red Lip Makeup TSLM2',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549088143.html',
      keywords: 'Cruelty Free lipstick'
    },
    {
      app_sale_price: 0.68,
      app_sale_price_currency: 'USD',
      discount_rate: 48,
      product_id: 1005002549071248,
      product_main_image_url: 'https://ae01.alicdn.com/kf/Hf37a3a9c425a46d5bb5009a0f4f45665d.jpg',
      product_title: 'PINKFLASH Airy Lip Gloss Waterproof Long-lasting Liquid Lipstick Matte Nude Non-fading Lip Glaze Sexy Red Lip Makeup TSLM2',
      metadata: [Object],
      product_detail_url: '//www.aliexpress.com/item/1005002549071248.html',
      keywords: 'Cruelty Free lipstick'
    }
  ],
  shipFrom: {
    paramType: 'String',
    paramName: 'shpf_co',
    type: 'logistics',
    title: 'Ship From',
    tItemType: 'search_refine_logistics',
    content: [ [Object], [Object], [Object] ]
  },
  searchEngine: {
    shipFromCountry: 'CN',
    keywords: 'Cruelty Free lipstick',
    page: 1,
    isFastShipping: false,
    isFreeShipping: false,
    isPopular: false,
    target_currency: 'USD',
    sortType: 'newest',
    sortOrder: 'desc'
  },
  brands: {
    paramType: 'String',
    paramName: 'bids',
    type: 'brandWall',
    title: 'Brands',
    tItemType: 'search_refine_brandwall',
    content: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  },
  relatedCategories: {
    paramType: 'String',
    paramName: 'cid',
    type: 'category',
    title: 'Categories',
    tItemType: 'search_refine_category',
    content: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object]
    ]
  },
  limit: 20,
  page: 1,
  hasPrevPage: false,
  hasNextPage: true,
  nextPage: 2,
  prvPage: null,
  totalPages: 9300,
  total_record_count: 185988,
  price_range: {
    paramType: 'String',
    minTips: 'Min.',
    paramName: 'pr',
    maxTips: 'Max',
    type: 'priceRange',
    title: 'Price',
    tItemType: 'search_refine_pricerange',
    content: []
  }
}

////////
async function getImage(name) {
  var options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
    params: {
      q: name,
      pageNumber: '1',
      pageSize: '1',
      autoCorrect: 'true'
    },
    headers: {
      'x-rapidapi-key': 'fcccc45190mshf16bbe274d17269p1760e6jsn39915d314754',
      'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  };

  const img = await axios.request(options).then(async function(response) {

    return response.data.value[0].url;
  }).catch(function(error) {
    console.error('Error');
    console.error(error);;
  });
  //console.log(r);
  return img;
}
///////
/**
Se extrae la lista de productos de ali express
*/
function getValuesProduct(data){
  var products =[];
  //data = test;
  data.docs.forEach(elem =>{
    products.push({url : elem.product_detail_url ,
    title: elem.product_title,
    price: elem.app_sale_price,
    image: elem.product_main_image_url});
    //console.log(elem.product_detail_url);
  });
  //console.log(products);
  return products;
}
async function getProducts(product) {
  var options = {
    method: 'GET',
    url: 'https://magic-aliexpress1.p.rapidapi.com/api/products/search',
    params: {
      name: 'Cruelty Free '+ product,
      sort: 'NEWEST_DESC',
      page: '1',
      shipFromCountry: 'CN',
      fastDelivery: 'true'
    },
    headers: {
      'x-rapidapi-key': 'cbe51f4fdamsh5521e2d31ce38eap148674jsn89ba0726a9f2',
      'x-rapidapi-host': 'magic-aliexpress1.p.rapidapi.com'
    }
  };

  const products = await axios.request(options).then(async function(response) {
    return getValuesProduct(response.data);
  }).catch(function(error) {
    console.log('Error en getProducts');
    console.error(error);
  });
  // var options = {
  //   method: 'GET',
  //   url: 'https://ali-express1.p.rapidapi.com/search',
  //   params: {
  //     query: 'Cruelty Free lipstick',
  //     page: '1'
  //   },
  //   headers: {
  //     'x-rapidapi-key': 'fcccc45190mshf16bbe274d17269p1760e6jsn39915d314754',
  //     'x-rapidapi-host': 'ali-express1.p.rapidapi.com'
  //   }
  // };
  //
  // const products = await axios.request(options).then(async function(response) {
  //   console.log(response.data);
  // }).catch(function(error) {
  //   console.error(error);
  // });
  //console.log(products);
  return products;
}
//getValuesProduct();
//getProducts('');
module.exports = {
  getImage,
  getProducts,
  getValuesProduct
}
// var z = getApi('Aggi Natural Beauty');
