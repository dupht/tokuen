//requireなのでNodeで動かしてね♪

const http = require("http");
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type" : "text/html"});
    response.end("Hello World\n");
}).listen(process.env.PORT, process.env.IP);
console.log("Server running at http://localhost:8080/");

var twitter = require('twitter');

var client = new twitter({
    consumer_key: "Q7qbjBMs5TyCQ4giCWB7I8pij",
    consumer_secret: "DLqNE6vjbrmBTIqCg7AfNQX6EfXUN9BdbSP1XGDsE7UNvNgx9a",
    access_token_key: "914758570893119488-udW2qLCMGXCd5l4lubK8dV3qLtzHeqF",
    access_token_secret: "eewB8z8JalkHNPP9AykorAj2DazsF0fZjJ1og0uBCByPg",
});

var params = {screen_name: 'nodejs'};

const fs=require("fs");

client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
        fs.writeFile("tweets.json", JSON.stringify(tweets,null,"    "), (err) =>{
            if(err){
                console.log("エラーが発生しました" + err);
                throw err;
            }else{
                console.log("ファイルが正常に書き出しされました");
            }
        });
    }
});

