//requireなのでnodeで動かしてね♪

const Pixiv = require("pixiv.js");
const pixivImg = require("pixiv-img");

let username = "justworse";
let password = "wintersnow"; 
const pixiv = new Pixiv(username, password);

// pixiv.users(17376182).then(res =>{
//     console.log(res.response[0].name);
// });

// pixiv.users(471355).then(res =>{
//     let userInfo = res.response[0];
//     console.log(JSON.stringify(userInfo, null, 2 ));
// });

pixiv.works(70031050).then(res => {
    const work = res.response[0];
    console.log(JSON.stringify(res.response[0], null, 2));
    // pixivImg(work.image_urls.large); 
    return pixivImg(work.metadata.pages[1].image_urls.large);
    console.log(work.metadata.pages[1].image_urls.large);
    console.log(work.tags[0]);
    // if(work.metadata.pages != null){
        // for(let i=1; i<work.metadata.pages.length;i++){
       
        // }
    // }
});

// pixiv.usersWorks(471355).then(res =>{
//     res.response.forEach(work =>{
//         console.log(work.title);
//     });
// });



// pixiv.search( "極上の女体", {mode:"tag"})
// .then(json => {
//     const work = json.response[0];
//     console.log(`downloading...${work.title} by ${work.user.name}`);
//     return pixivImg(work.image_urls.large);
// }).then(() => console.log(`finish!`))
// .catch(console.log);

