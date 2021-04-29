const cheerio = require('cheerio');
const request = require('request-promise');
async function scraper(url, key ,tag, list , listItems){

  const $ = await request({
    uri: url+key,
    transform: body => cheerio.load(body)
  });
  const value = $(tag).each((i,el)=>{
    if(list){
        for(var key in listItems){
          const allTags = $(el).find(key);
          // console.log('1.'+ key);
          for(var k in allTags){
            const eachTag =  allTags[k].attribs;
            // console.log('2. ', eachTag);
            for(var i in listItems[key]){
              try{
                console.log(eachTag[listItems[key][i]]);
              }catch(error){
                // console.error(error);
                // break;
              }
            }
          }

        }
    }else{
      console.log($(el).text())
    }

  });
  // console.log(status.text());
}
// para crueltyfree ejecutar esto antes de mandar el key key = key.trim().replaceAll(' ','-')
var url = 'https://www.petalatino.com/?s=';
var key = 'Procter & Gamble';t
var tag = 'div.search-container';
// key = key.trim().replaceAll(' ','-')t
scraper(url,key,tag, true, {'div.thumb >a':['href'],'div.thumb >a >img':['alt','data-lazy-src']});
// scraper(url,key,tag, true, {'a':['title']});
// scraper(url,key,tag, false, {'a':['title']});
