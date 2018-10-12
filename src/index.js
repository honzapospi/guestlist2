const restify = require('restify');
const getGuestListController = require('./guest/getGuestListController');
const removeGuestController = require('./guest/removeGuestController');
const addGuestController = require('./guest/addGuestController');
const {bodyParser} = require('restify-plugins');

const server = restify.createServer();
server.use(bodyParser());

const logger = (req, res, next) => {
    console.log('REQUESTED URL: '+req.url);
    next();
}
server.use(logger);

// endpoints
server.get('/guest', getGuestListController);
server.del('/guest/:id', removeGuestController);
server.post('/guest', addGuestController);


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});