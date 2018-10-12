const query = require('./connection');

const getGuests = () => {
    return query('SELECT * FROM guest');
}

const removeGuest = (id) => {
    return query('DELETE FROM guest WHERE id = ?', [id]);
}

module.exports = {getGuests, removeGuest};

