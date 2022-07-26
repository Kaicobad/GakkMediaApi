const config = {
    driver: 'msnodesqlv8',//driver support for mssql server
    user :'sa', //use your user Name
    password :'1234', //user your sql server pss
    server:'localhost',
    database:'dbGakk',  //dbName
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        trustServerCertificate: true,
        instancename :'SQLEXPRESS'
    },
    port : 1433
}

module.exports = config;
// driver: 'msnodesqlv8',
// trustServerCertificate: true,
//         enablearithAbort :true,