const { response } = require('express');
const res = require('express/lib/response');


module.exports = function(app){ 
    
    app.get('/noticias', function(req, res){

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;
        noticiasModel.getNoticias(connection, function(error, result){
            res.render("noticias/noticias", {noticias : result});
            });

        
    });
    
}    