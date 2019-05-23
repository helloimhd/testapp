var formidable = require('formidable');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
      db.pokemon.getAll((error, allPokemon) => {
        response.render('pokemon/index', { allPokemon });
      });
  };

  let uploadControllerCallback = (request, response) => {
    response.send(`<form enctype="multipart/form-data" action="/upload" method="POST">
                    <input type="file" name="myFile">
                    <input type="submit" class="btn btn-primary">
                </form>`)
  }


  let submitUpload = (request, response) => {
    var form = new formidable.IncomingForm();

    form.parse(request);

    form.on('fileBegin', function (name, file){
        file.path = (`/Users/herda/sei1/test-app/yoo/mvc-template/public/images/${file.name}`);
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    response.send("yes")
  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    upload: uploadControllerCallback,
    submitUpload: submitUpload
  };

}