// MULTER
const multer = require('multer')
var upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    console.log(file)
    cb(null, file.originalname)
  }
})


module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);

  app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);

  app.get('/upload', pokemonControllerCallbacks.upload);
  app.post('/upload', pokemonControllerCallbacks.submitUpload)

  app.get('/cloudUpload', pokemonControllerCallbacks.cloud);
  app.post('/cloudUpload', upload.single('img'), pokemonControllerCallbacks.cloudUpload)




// app.get('/upload', function (req, res){
//     res.sendFile(__dirname + '/index.html');
// });

// app.post('/upload', function (req, res){
//     var form = new formidable.IncomingForm();

//     form.parse(req);

//     form.on('fileBegin', function (name, file){
//         file.path = __dirname + '/uploads/' + file.name;
//     });

//     form.on('file', function (name, file){
//         console.log('Uploaded ' + file.name);
//     });

//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/testUpload', (request, response) => {
//     response.send(`<form enctype="multipart/form-data" action="/testUpload" method="POST">
//   <input type="file" name="myFile">
//   <input type="submit" class="btn btn-primary">
// </form>`)
// })
};