var React = require("react");

class Home extends React.Component {

  render() {
    console.log("asdads");


    return (
      <html>
        <head>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        </head>
        <body>
          <h3>Hello</h3>
          <form action="/" enctype="multipart/form-data" method="post">
                <input type="file" name="upload" multiple />
                <input type="submit" value="Upload" />
            </form>
          <script src="/script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;