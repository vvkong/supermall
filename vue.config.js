const {mockData} = require('./src/mock/mock')

module.exports = {
    devServer: {
      before(app) {
        mockData(app);
      }
    }
}
