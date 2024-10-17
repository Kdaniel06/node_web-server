// const { envs } = require('./config/env')
import { envs } from './config/env.js' // * ES6 JS Version

//const { startServer } = require('./server/server')
import { startServer } from './server/server.js' // * ES6 JS Version

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// ? Agnostic (no named) autoconvocated (called with parenthesis) function
( async () => {
    main()
})()

