const mysql = require('mysql2/promise');

const config = {
    host:'localhost', 
    user: 'guestlist', 
    database: 'guestlist',
    password: 'heslo'
}

const createConnection = mysql.createConnection(config);

module.exports = (sql, params) => {
    return new Promise((resolve, reject) => {
        createConnection.then(connection => {
            connection.execute(sql, params).then(resolve).catch(reject);
        }).catch(reject);
    });
}

