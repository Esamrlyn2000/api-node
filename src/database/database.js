import  mysql  from "promise-mysql";
import  config  from "./../config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});
const getConnectios=() =>{
    return connection;
}

export default getConnectios();