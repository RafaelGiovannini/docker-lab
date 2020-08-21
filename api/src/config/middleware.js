const bodyParser = require('body-parser');
const cors = require('cors');
const routeConfigurator = require('./routes');

exports.cfgMiddlewares = (app) => {
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    // apply cors headers
    app.use(cors());

    // Config routes
    routeConfigurator.configureRoutes(app);
}