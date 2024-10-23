//var dbConnection = require('../config/dbConnection');

module.exports = function(app){
   app.get('/informacao/professores', function(req,res){
      async function getProfessores() {
          try {

                var connection = app.config.dbConnection;          
                const pool = await connection; // executando a função
          
                const results = await pool.request().query('SELECT * from PROFESSORES')
          
                //res.send(results.recordsets)
                res.render('informacao/professores', {profs: results.recordset});
    
           } catch (err) {
               console.log(err)
          }
           //res.render('informacao/professores');
       }
      getProfessores();
   }); 
}