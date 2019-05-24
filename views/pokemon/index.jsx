var React = require("react");

class Home extends React.Component {

  render() {
    //console.log("encType="multipart/form-data"")
    return (
      <html>
        <head>
        </head>

        <body>
          <h3>Hello</h3>
          <form encType="multipart/form-data" method="post" action="/cloudUpload">
                <input type="file" name="img" />
                <button type="submit">submit</button>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Home;