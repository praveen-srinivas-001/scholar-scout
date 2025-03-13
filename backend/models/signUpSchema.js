const mdb = require('mongoose')

const signupSchema = mdb.Schema({
    userName : String,
    emailId : String,
    password : String,
})

const signup_schema = mdb.model('signup', signupSchema);

module.exports = signup_schema;