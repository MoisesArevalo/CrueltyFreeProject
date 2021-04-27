var unirest = require("unirest");

var req = unirest("GET", "https://amazon-products1.p.rapidapi.com/search");

req.query({
	"country": "US",
	"query": "lipstick+cruelty+free",
	"page": "1"
});

req.headers({
	"x-rapidapi-key": "fcccc45190mshf16bbe274d17269p1760e6jsn39915d314754",
	"x-rapidapi-host": "amazon-products1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
