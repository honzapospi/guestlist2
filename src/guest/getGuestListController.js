const api = require('../api/api');

module.exports = (req, res) => {
    api.getGuests().then(guestList => {
        res.json(guestList[0]);
    });
}