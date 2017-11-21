'use strict';

const mysql = require('mysql');

let conexion = mysql.createConnection({

		host: 'localhost',
		user: 'root',
		password: '',
		database: 'tareashoy',

});

conexion.connect(function(err) {
    if (err) throw err;
    console.log('conexion mysql success');
});

module.exports = conexion;
