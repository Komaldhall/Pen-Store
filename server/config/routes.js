let prod = require('../controllers/products.js');
var path = require('path');
module.exports = function(app){
    app.get('/produ', prod.index);
    app.get('/check', prod.check);
    app.get('/produ/:id', prod.get);
    app.post('/produ', prod.create);
    //products update
    app.put('/produ/:id', prod.update);
    //adding reviews
    // app.put('/products/:id/review', prod.review);
    app.delete('/produ/:id', prod.destroy);
    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
