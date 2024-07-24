const accountId = 144553
let  accountEmail = "devesh@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2// not allowed 

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "indore "
let accountstate;

console.log(accountId);


/*
prefer not to use var 
beacause of issue in block scope and functional  scope

*/

console.table([accountId,accountEmail,accountCity,accountPassword,accountstate])