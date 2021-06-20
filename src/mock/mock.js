var appData = require('./data.js');

function mockData(app) {
  app.get('/api/index', (req, res) => {
    res.json({
        code: 0,
        msg: 'success',
        data: appData.index
    });
})
}
module.exports = {
  mockData,
}
