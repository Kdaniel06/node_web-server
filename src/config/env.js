//require('dotenv').config();
import env from 'dotenv' // * ES6 JS VERSION

// const { get } = require('env-var');
import envvar from 'env-var'; // * ES6 JS VERION

env.config(); // * ES6 JS VERION

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

// module.exports = {
//     envs
// }