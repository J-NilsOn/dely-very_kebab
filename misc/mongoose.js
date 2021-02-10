const mongoose = require('mongoose');

module.exports.dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/P2W2D3', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
