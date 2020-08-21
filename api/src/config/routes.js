const catRoute = require('../routes/cat.route');
const authRoute = require('../routes/auth.route');


exports.configureRoutes = (app) => {
    app.use('/api/v1/cat', catRoute);
    app.use('/api/v1/auth', authRoute);
}