const express = require('express');
const app = express();
var appData = require('./src/mock/data.js');
var router = express.Router();
app.use('/api', router);

module.exports = {
    devServer: {
        before(app) {
            app.get('/api/index', (req, res) => {
                res.json({
                    code: 0,
                    msg: 'success',
                    data: appData.index
                })
            })
        }
    }
}
