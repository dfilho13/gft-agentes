var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'GFT',
        password: 'Gft@21',
        server: '172.25.10.6',
        database: 'MIS_GFT'
    });

    return conn;
};

module.exports = connect;