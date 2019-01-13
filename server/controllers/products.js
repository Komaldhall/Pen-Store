let mongoose = require('mongoose');
var Product = mongoose.model('product')

module.exports = {
    index: function(req, res) {
        Product.find({},function(err, prod){
            if(err) {
                console.log('something went wrong with index');
                res.json(err);
            } else { 
                console.log('successfully retrieved Product!');
                res.json(prod);
            }
        })
        
    },
    check:function(req,res){
        Product.find({}.count).exec(function(err, prod){
            if(err) {
                console.log('something went wrong with show');
                res.json(err);
            } else { 
                console.log('successfully retrieved Product!');
                res.json(prod);  
               
            }
        })
    },
    create: function(req, res) {
        console.log('m here');
        var product = new Product({name: req.body.name, quantity:req.body.quantity, price:req.body.price, id:req.body.id, description:req.body.description, image:req.body.image});
        product.save(function(err) {
            if(err) {
                console.log('something went wrong');
                res.json(err);
                
            } else { 
                console.log('successfully added a Product!');
                res.json(product);  
            }
            
        })
    },
    get: function(req, res) {
        // ,{$sort:{reviews:{stars:-1}}}
        Product.findOne({id: req.params.id},function(err, prod){
            if(err) {
                console.log('something went wrong with show');
                res.json(err);
                // for(var key in err.errors){
                //     req.flash('mongoerror', err.errors[key].message);
                // }
                // res.redirect('/');
            } else { 
                console.log('successfully retrieved Product!');
                res.json(prod);  
               
            }
        })
       
    },
    update:function(req, res) {
        console.log('here in routes');
        Product.findOne({id:req.params.id}, function(err,prod){
            if(err) {
                console.log('something went wrong');
                res.json(err);
                // for(var key in err.errors){
                //     req.flash('mongoerror', err.errors[key].message);
                // }
                // console.log(err);
            } else { 
                prod.name=req.body.name;
                prod.quantity = req.body.quantity;
                prod.price = req.body.price;
                prod.description = req.body.description;
                prod.image = req.body.image;
                prod.save(function(err) {
                    if(err) {
                        console.log('something went wrong');
                        res.json(err);
                        // for(var key in err.errors){
                        //     req.flash('mongoerror', err.errors[key].message);
                        // }
                        // console.log(err);
                        
                    } else { 
                        console.log('successfully added a Product!');
                        res.json(prod);  
                    }
                    
                }) 
            }
        })
    },
    // review:function(req, res) {
    //     Product.update({_id:req.params.id}, {$push:{reviews: {name:req.body.name, stars: req.body.stars, description:req.body.description}}}, {upsert: true}, function(err, prod){
    //         if(err){
    //             res.json(err);
    //         }
    //         else{
    //             res.json(prod);
    //         }    
    //     })
    // },
        
    destroy: function(req, res){
        Product.remove({id:req.params.id},function(err, prod){
            if(err) {
                console.log('something went wrong with destroy');
                res.json(err);
            } else { 
                console.log('successfully destroyed Product!');
                res.json(prod);  
            }
        })
    }

};