const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';

module.exports = (app) => {
    app.use("/", cors({
        origin:["http://localhost:3000"],
        methods: "POST",
        credentials: true,
        exposedHeaders: "Set-Cookie",
        maxAge: 86400
    }));

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(cookieParser(secret));
};