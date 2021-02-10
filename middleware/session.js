const session = require('express-session');
const FileStore = require('session-file-store')(session);

const cookieCleaner = (req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie("user_sid");
    }
    next()
};

module.exports.sessionConfig = (application) => {
    application.use(session({
        store: new FileStore(),
        key: 'user_sid',
        secret: 'anything here',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 5000
        }
    }));
    application.use(cookieCleaner);
};

module.exports.sessionChecker = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/');
    } else {
        next()
    }
};

module.exports.sessionVariables = (req, res, next) => {
    if (req.session.user) {
        res.locals.login = true;
        res.locals.userName = req.session.user;
        next()
    } else {
        next()
    }
};
