const request = require('request');
const axios = require("axios").default;

////////
async function getImage(name){
  var axios = require("axios").default;

 var options = {
   method: 'GET',
   url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
   params: {q: name, pageNumber: '1', pageSize: '1', autoCorrect: 'true'},
   headers: {
     'x-rapidapi-key': 'fcccc45190mshf16bbe274d17269p1760e6jsn39915d314754',
     'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
   }
 };

 const r =  await axios.request(options).then( async function (response) {

  return response.data.value[0].url;
 }).catch(function (error) {
 	console.error('Error');
  console.error(error);;
 });
 //console.log(r);
 return r;
}
///////
module.exports={getImage};
// var z = getApi('Aggi Natural Beauty');
