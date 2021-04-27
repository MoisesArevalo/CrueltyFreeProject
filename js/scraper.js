const cheerio = require('cheerio');
const request = require('request-promise');
const express = require('express');
async function scraper(url, key ,tag, list , listItems){
  var results = [];
  var values =[];

    const $ = await request({
      uri: url+key,
      transform: body => cheerio.load(body)
    }).catch((error)=> console.log('error'));


    try{
      $(tag).each((i,el)=>{
        try{
          if(list){
              for(var key in listItems){
                const allTags = $(el).find(key);
                // console.log('1.'+ key);
                for(var k in allTags){
                  const eachTag =  allTags[k].attribs;
                  // console.log('2. ', eachTag);
                  for(var i in listItems[key]){
                    try{
                      values.push(eachTag[listItems[key][i]]);
                    }catch(error){
                      // console.error(error);
                      // break;
                    }
                    // var aux = listItems[key][i].toString();
                    // results.push({key: aux, value: values});
                    // values=[];
                  }

                }

              }
            }else{
                values.push( $(el).text())
              }
        }catch(error){
          values =['Not found!'];
        }


      });
    }catch(error){
      values =['Not found!'];
    }



  // for(var key in results){
  //   console.log(results[key]);
  // }
  // values.forEach((el,ind,aray)=>{
  //   console.log(el, ind)
  // });
  // console.log(values);
  // console.log(status.text());
  return values;
}
async function search(value, key){
  var url = 'https://www.petalatino.com/?s=';
  var tag = 'div.search-container';
  var dic ={'div.thumb >a':['href'],'div.thumb >a >img':['alt','data-lazy-src']};
  var list = true;
  if(value==1){
    url='https://crueltyfree.peta.org/company/';
    tag= 'div.testing-policy-text';
    key = key.trim().replaceAll(' ','-');

    list=false;
  }else if (value == 2) {
    url='https://crueltyfree.peta.org/region/?region=';
    tag= 'ul.search-results'
    dic = {'a':['title']};
  }
  // scraper(url, key,tag, list, dic).then(function(val){
  //   console.log('2',val[0])
  //   return val[0];
  // });
  return await scraper(url, key,tag, list, dic);
}
module.exports = {search};
// para crueltyfree ejecutar esto antes de mandar el key key = key.trim().replaceAll(' ','-')
// var url = 'https://www.petalatino.com/?s=';
// var key = 'Procter & Gamble';
// var tag = 'div.search-container';
// // key = key.trim().replaceAll(' ','-')
// scraper(url,key,tag, true, {'div.thumb >a':['href'],'div.thumb >a >img':['alt','data-lazy-src']});
// scraper(url,key,tag, true, {'a':['title']});
// scraper(url,key,tag, false, {'a':['title']});
