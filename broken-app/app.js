const express = require('express');
let axios = require('axios');
const app = express();

app.use(express.json());

// app.post('/', function(req, res, next) {
//   try {
//     let results = req.body.developers.map(async d => {
//       return await axios.get(`https://api.github.com/users/${d}`);
//     });
//     let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//     return res.send(JSON.stringify(out));
//   } catch {
//     next(err);
//   }
// });

// app.listen(3000);

app.post('/', async function(req, res){
try{
  const results = req.body.developers
  const responses = await Promise.all(results.map(async d => {
    const response = await axios.get(`https://api.github.com/users/${d}`);
    console.log(response);
    return response;
  }));

  const out = responses.map(r => ({name: r.data.name, bio: r.data.bio}));
  return res.send(JSON.stringify(out));

  }catch{
    app.use(function (req, res, next) {
      return new ExpressError("User Not Found", 404);
    });
  }});

app.listen(3000, function(){
  console.log(`Server starting on port 3000`);
});