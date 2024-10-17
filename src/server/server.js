// const express = require('express')
import express from 'express' // * ES6 JS VERSION
// const path  = require('path')
import path from 'path' // * ES6 JS VERSION

export const startServer = (options) => {
    const { port, public_path = 'public' } = options
    
    const app = express()

    // * MIDDLEWARE => use (express)
    app.use(express.static(public_path)) // ? Public path static files

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    // * Open port and listen it
    app.listen(port, () => {
        console.log(`Listen to the port ${port}`)
    })
}

// module.exports = {
//     startServer
// }