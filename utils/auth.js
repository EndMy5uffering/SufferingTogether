const bcrypt = require('bcrypt');

const saltRounds = 10;

async function validatePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword)
}

function hashPassword(password){
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

module.exports = {
    hashPassword: hashPassword,
    validatePassword: validatePassword,

}