const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
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
  res.setHeader('content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><h1>Hello World!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
