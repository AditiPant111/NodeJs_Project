
function myMiddleware(req, res, next) {
    console.log('Custom Middleware');
    next();
}

function my2Middleware(req, res, next) {
    console.log('Second Custom Middleware');
    next();
}

module.exports = { myMiddleware, my2Middleware };