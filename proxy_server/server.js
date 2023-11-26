const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const apiTarget = 'https://www.wikiart.org';


const apiProxy = createProxyMiddleware({
  target: apiTarget,
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api': '',
  },
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api', apiProxy);

const port = 3000;
app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
