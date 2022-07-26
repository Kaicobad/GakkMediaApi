const config = {
    driver: 'msnodesqlv8',
    user :'sa',
    password :'1234',
    server:'localhost',
    database:'dbGakk',  
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