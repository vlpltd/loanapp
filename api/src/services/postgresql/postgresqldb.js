const Sequelize = require('sequelize');
const config = require('../../config/config.js')
var knex = require('knex')

 let dbconnection;

function GetDBConnection() {
  if (dbconnection !== undefined) {
    return dbconnection;
  } else {
    var _knex = knex({
      client: "pg",
      version: "9.5.14",
      connection:  {
        host : config.host,
        user : config.username,
        password : config.password,
        database : config.database
      }
    });
    return _knex;
  }
}

function GetDBDisconnection(_knex) {
  if (_knex !== null) {
    _knex.destroy();
  }
}


/**
 * create user into the users table
 *
 * @param  {String} username
 */

exports.createUser = async (payload) => {
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("login").insert(payload)
      .then(success => {
        resolve("successfully inserted.");
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};

  /**
 * get user data from the users table
 * 
 *
 * @param  {String} username
 */
exports.getUsers = async (payload) => {
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("users").select('id', 'username')
        .then(success => {
          resolve(success);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          GetDBDisconnection(dbconnection);
        });
  })
};

/**
 * update user into the users table
 *
 * @param  {String} username
 * @param {integer} id
 */

exports.updateuser = async (payload) => {
 
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("users").where('id', payload.id)
      .update({ 'username': payload.username, 'password': payload.password })
      .then(success => {
        if (success) {
          resolve("updated sucessfully.");
        } else {
          resolve("No records found.");
        }
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};


/**
 * update user into the users table
 *
 * @param  {String} username
 * @param {integer} id
 */

exports.deleteUser = async (payload) => {

  dbconnection= undefined;
  dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("users").where('id', payload.id)
      .del()
      .then(success => {
        if (success) {
          resolve("deleted sucessfully.");
        } else {
          resolve("No records found.");
        }
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};

// getMembers
exports.getMembers = async (payload) => {
  var dbconnection = GetDBConnection();
  return new Promise(async (resolve, reject) => {
    dbconnection("member").select('Name', 'Mobile_Number')
        .then(success => {
          resolve(success);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          GetDBDisconnection(dbconnection);
        });
  })
};



/**
 * create user into the users table
 *
 * @param  {String} username
 */

exports.loginUser = async (payload) => {

  dbconnection= undefined;
  dbconnection = GetDBConnection();

  return new Promise(async (resolve, reject) => {
    dbconnection("login").select('id').where({ username: payload.username, password: payload.password })
      .then(success => {
        resolve(success);
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        GetDBDisconnection(dbconnection);
      });
  })
};
