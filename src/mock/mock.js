var {index, goods} = require('./data.js');

function mockData(app) {
  app.get('/api/index', (req, res) => {
    res.json({
        code: 0,
        msg: 'success',
        data: index
    });
  });
  app.get('/api/goods', (req, res) => {
    console.log("====================")
    console.log(req.query);
    console.log(goods[req.query.type].length)
    console.log("====================")
    let data = [];
    const pageSize = 10;
    const start = req.query.page*pageSize;
    const end = Math.min(start+pageSize, goods[req.query.type].length);
    for( let i=start; i<end; i++ ) {
      data.push(goods[req.query.type][i]);
    }
    console.log("start: " + start + ", end: " + end + ", response length: " + data.length);
    res.json({
        code: 0,
        msg: 'success',
        data
    });
  });
}
module.exports = {
  mockData,
}
