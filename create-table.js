const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'db4free.net',
  port     : 3306,
  user     : 'kleysonmorais',
  password : 'tempo123',
  database : 'tempoprodutivo'
});

connection.connect(function(err){
    if(err) return console.log(err);
    console.log('Conectou!');
    // TableSQL.createTable(connection);
    TableSQL.addRows(connection);
})

class TableSQL {

    static createTable(conn){
    
        const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
                    "ID int NOT NULL AUTO_INCREMENT,\n"+
                    "Nome varchar(150) NOT NULL,\n"+
                    "CPF char(11) NOT NULL,\n"+
                    "PRIMARY KEY (ID)\n"+
                    ");";
        
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
            console.log('criou a tabela!');
        });
    }

    static addRows(conn){
        const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
        const values = [
              ['Pedro', '12345678901'],
              ['João', '09876543210'],
              ['Antônio', '12312312399']
            ];
        conn.query(sql, [values], function (error, results, fields){
                if(error) return console.log(error);
                console.log('adicionou registros!');
                conn.end();//fecha a conexão
            });
      }
}
