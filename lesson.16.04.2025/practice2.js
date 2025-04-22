import http from "http";
import { parse } from "url";

const books = [
  {
    id: 1,
    title: "O'tgan kunlar",
    author: "Abdulla Qodiriy",
    year: 1926
  },
  {
    id: 2,
    title: "Yulduzli tunlar",
    author: "Pirimqul Qodirov",
    year: 1979
  }
];

const server = http.createServer((req, res) => {
  const parsedUrl = parse(req.url, true); // ← to‘g‘ri nom

  if (req.method === 'GET' && parsedUrl.pathname === '/books') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(books));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Sahifa topilmadi');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishlayapti`);
});