// node로 서버 열었던 거를 js로 여는거(차이없음)

const liveServer = require('live-server');

//parameters
const params = {
  host: 'localhost',
  port: 3000,
  open: false,
  root: './client'
};

liveServer.start(params);