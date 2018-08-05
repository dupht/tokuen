//requireなのでnodeで動かしてね♪

const Pixiv = require("pixiv.js");
const pixivImg = require("pixiv-img");

const pixiv = new Pixiv("justworse", "wintersnow");

pixiv.users(471355).then(res =>{
    console.log(res.response[0].name);
});



pixiv.search("艦これ10000users入り", {mode: "tag"})
.then(json => {
    const work = json.response[0];
    console.log(`downloading...${work.title} by ${work.user.name}`);
    return pixivImg(work.image_urls.large);
}).then(() => console.log(`finish!`))
.catch(console.log);
