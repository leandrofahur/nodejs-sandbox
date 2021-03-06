const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/') {
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write(`
      <body>
        <h1>Insert an message</h1>
        <form action="/message" method="POST">
          <input type="text" name="message">
          <button type="submit">Submit</button>
        </form>
      </body>`);
    res.write('</html>');
    return res.end();  
  }

  if(url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      // console.log(typeof message);
      // let formatedMessage = [...message].forEach(char => {
      //   // console.log(char);
      //   if(char === '+') {
      //     char = ' ';
      //   }
      // })
      console.log(message);
      fs.writeFile('message.txt', message, (err) => {
        // if(err) {
        //   console.log(err.message);
        // }
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  // res.setHeader('content-type', 'text/html');
  // res.write('<html>');
  // res.write('<head><title>My first page</title></head>');
  // res.write('<body><h1>Hello World!</h1></body>');
  // res.write('</html>');
  // res.end();
}

module.exports = requestHandler;