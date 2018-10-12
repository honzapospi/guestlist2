const api = require('../api/api');

module.exports = (req, res) => {
    console.log(req.params);
    api.removeGuest(+req.params.id).then(result => {
        res.json(result[0].affectedRows + ' rows has been deleted.');
    });
}

