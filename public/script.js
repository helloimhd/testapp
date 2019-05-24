
// const fetch = require('node-fetch');
// const fs = require('fs');
// const FormData = require('form-data');

// const input = document.getElementById('fileinput');
// console.log(input)


// const url = 'https://api.tabscanner.com/VCB56Md7G1imsKz6Y3FKmcNiBXNmBaClTSpyT55ciRZLTdWDKRD06iBQx4JvoSpr/process'
// // This will upload the file after having read it
// const upload = (file) => {
//     console.log("adhakh")
//     const form = new FormData();

//     form.append('my_file', fs.createReadStream('./test2.jpg'));

//     fetch('https://api.tabscanner.com/VCB56Md7G1imsKz6Y3FKmcNiBXNmBaClTSpyT55ciRZLTdWDKRD06iBQx4JvoSpr/process', {
//             method: 'post',
//             body:    form,
//             headers: form.getHeaders(),
//     })
//     .then(res => res.json())
//     .then(json => console.log(json));

// };

// // Event handler executed when a file is selected
// const onSelectFile = () => upload(input.files[0]);

// // Add a listener on your input
// // It will be triggered when a file will be selected
// input.addEventListener('change', onSelectFile, false);