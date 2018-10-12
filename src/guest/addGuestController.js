const {addGuest} = require('../api/api');

module.exports = (req, res) => {
    addGuest(req.body.name, req.body.surname).then(result => {
        res.status(201);
        res.send({
            "message": "New guest has been created",
            "new_id": result[0].insertId
        });
    });
}