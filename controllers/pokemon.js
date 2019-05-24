var formidable = require('formidable');
var cloudinary = require('cloudinary').v2;

const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');
var requestPackage = require('request');

cloudinary.config({
  cloud_name: 'difceofnn',
  api_key: '138163593634117',
  api_secret: 'UQBGNsgKzLZDlijgj-t1Tx6Sm84'
});


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





  let cloudControllerCallback = (request, response) => {
    response.render('pokemon/index');
  }

  let cloudUploadControllerCallback = (request, response) => {
    let file = request.file.path;

    let url = "";
    let publicId = "";

    cloudinary.uploader.upload(
      file,
      function(error, result) {
        console.log("upload to cloudinary successful")
        url = result.url;
        publicId = result.public_id

        if (url !== "" && publicId !== "") {
            console.log(url)
            console.log(publicId)
            console.log("entering to fetch and post")

            const form = new FormData();

            form.append(publicId, requestPackage(url));

            fetch('https://api.tabscanner.com/VCB56Md7G1imsKz6Y3FKmcNiBXNmBaClTSpyT55ciRZLTdWDKRD06iBQx4JvoSpr/process', {
                method: 'post',
                body:    form,
                headers: form.getHeaders(),
            })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(error => console.error(error));

        } else {
        console.log(" :( ")
        }
      }
    );  // end of cloudinary upload
} // end of request


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    upload: uploadControllerCallback,
    submitUpload: submitUpload,
    cloud: cloudControllerCallback,
    cloudUpload: cloudUploadControllerCallback
  };

}