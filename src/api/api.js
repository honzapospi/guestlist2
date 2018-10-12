const query = require('./connection');

const getGuests = () => {
    return query('SELECT * FROM guest');
}

const removeGuest = (id) => { //'1 OR 1 = 1'
    return query('DELETE FROM guest WHERE id = ?', [id]);
}

const addGuest = (name, surname) => {
    return query('INSERT INTO guest (name, surname) VALUES (?, ?)', [name, surname]);
}

module.exports = {getGuests, removeGuest, addGuest};