import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'
import http from 'http';
const app = express();

app.use(cors());

app.get('/', async (req, res) => {
    const response = await fetch('https://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json')
    res.json(await response.json())
})

const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
  const port = normalizePort(process.env.PORT || '3000');
  app.set('port', port);

  const server = http.createServer(app);


  server.listen(port);