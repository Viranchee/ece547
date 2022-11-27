const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

function calculateFibonacci(number) {
    if (number <= 1) return 1;

    return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
}

const server = http.createServer((req, res) => {
  
  // Get number from req.url after /number
  const number = parseInt(req.url.slice(1));
  console.log(number);
  // Calculate factorial of the number
  const fibonacci = calculateFibonacci(number);
  console.log(fibonacci);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World, Answer is ' + fibonacci);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});