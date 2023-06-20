const cors = require('cors');

const whitelist = ['http://localhost:3000', 'https://localhost:3443', 'http://localhost:3001'];

var corsOptionsDelegate = (req: { header: (arg0: string) => string; }, callback: (arg0: null, arg1: { origin: boolean; }) => void) => {
    var corsOptions;
    console.log(req.header('Origin'))
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
export {};