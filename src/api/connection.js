const mysql = require('mysql2/promise');

const config = {
    host:'localhost', 
    user: 'guestlist', 
    database: 'guestlist',
    password: 'heslo'
}

const createConnection = mysql.createConnection(config);

module.exports = (sql) => {
    return new Promise((resolve, reject) => {
        createConnection.then(connection => {
            connection.execute(sql).then(resolve).catch(reject);
        }).catch(reject);
    });
}

