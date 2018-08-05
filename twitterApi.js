let date = new Date();
let pass_length = 30;
let c = "abcdefghijklmnopqrstuvwxyz0123456789";
let cl = c.length;
let r ="";
for(let i=0; i< pass_length;i++){
    r+=c[Math.floor(Math.random()*cl)];
}
/*Twitterで取得できるkeyとsecret*/
const consumer_key = "Q7qbjBMs5TyCQ4giCWB7I8pij";
const consumer_secret = "DLqNE6vjbrmBTIqCg7AfNQX6EfXUN9BdbSP1XGDsE7UNvNgx9a";
const access_token_key = "914758570893119488-udW2qLCMGXCd5l4lubK8dV3qLtzHeqF";
const access_token_secret = "eewB8z8JalkHNPP9AykorAj2DazsF0fZjJ1og0uBCByPg";

let callbackURL = "http://localhost:8080/";

//エンドポイントURL
let requestURL="https://api.twitter.com/oauth/request_token";
//リクエストメソッド
let requestMethod ="POST";

/*署名用のKeyを作成 */
const key = encodeURIComponent(consumer_key) + "&" + encodeURIComponent(consumer_secret);
let params = new Map();
params.set("oauth_callback",callbackURL);
params.set("oauth_consumer_key",consumer_key);
params.set("oauth_signature_method","HMAC-SHA1");
params.set("oauth_timestamp",Math.floor(date.getTime() / 1000));
params.set("oauth_nonce",r);
params.set("oauth_version","1.0");

for(let [key, value] of params){
    if(key == "oauth_callback"){
        continue;
    }
    value = encodeURIComponent(value);
}

/*パラメータの組み立て key=value&key=value&... keyのalphabet順に並べる*/
/*パラメータをエンコード encoded_url = encodeURIComponent("~~~~~~~値~~~~~~~~") */

/*リクエストメソッドをエンコード(POST,GET等)*/

/*リクエストURLをエンコード*/

/*(リクエストメソッド)&(リクエストURL)&(パラメータ)　のように、この順で＆でつなげる */



