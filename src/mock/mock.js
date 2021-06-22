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
    if( goods[req.query.type].length > req.query.page ) {
      data = goods[req.query.type].splice(req.query.page, req.query.page+10);
    }
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
