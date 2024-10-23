var sql = require ('mssql');

var connSQLServer = function(){
    const sqlConfig = {
        user: 'BD2412019',
        password: 'batataAssada99177',
        database: 'BD', //Na FATEC, utilizar o database BD ou LP8
        server: 'Apolo', //Caso o nome tenha uma instância, colocar duas barras, ex: ‘DESKTOP\\SQLSERVER. Na FATEC, utilizar o ip: 192.168.1.6 no nome do servidor
        options: {
            encrypt: false,
            trustServerCertificate:true,
        }
    } 
    return sql.connect(sqlConfig)
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão');
    return connSQLServer;
}