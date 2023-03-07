const axios = require('axios');
const fs = require('fs');



async function writer(url){
    try{
        let fileName = url.replace("http://", "").replace("https://", "").replace(/\//g, "");
        let res = await axios.get(url);
        fs.writeFileSync(`${fileName}.txt`, res.data)
    }catch(err){
        console.log("Error occured while retrieving URL ", url)
    }
}
fs.readFile('urls.txt', 'utf8', function(err, data){
    if (err){
        console.log("An error has blocked the path", (err))
    }const urls = data.split('\n');
    console.log(urls);
    urls.forEach(url => {
       writer(url);
        });
    });
  
