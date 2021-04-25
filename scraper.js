const cheerio = require('cheerio');
const request = require('request-promise');
async function scraper(url, key ,tag, list , listItems){
  key = key.trim().replaceAll(' ','-')
  const $ = await request({
    uri: url+key,
    transform: body => cheerio.load(body)
  });
  const value = $(tag).each((i,el)=>{
    console.log('entra');
    if(list){
      for(i in listItems){
        console.log(listItems[i]);
        console.log($(el).find(listItems[i]).text());
      }
      // console.log($(el).find('.link'));
    }else{
      console.log($(el).text())
    }

  });
  // console.log(status.text());
}
var url = 'https://crueltyfree.peta.org/company/';
var key = 'Johnson & Johnson';
var tag = 'div.testing-policy-text';
scraper(url,key,tag, false, ['a.link']);
