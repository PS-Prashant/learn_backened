require('dotenv').config()
// import 'dotenv/config'

const express = require('express')  
// import express from 'express'

const app = express()

// const port = 3000 || 4000
const port = process.env.PORT  || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get( '/twitter', ( req, res ) =>  {
	res.send( 'Prashant Sharma' )
} )

app.get( '/login', ( req, res ) => {
	res.send( '<h1>Please Login</h1>' )
} )

app.get( '/test', ( req, res ) => {
	res.json( { tl: 'Pankaj Sir', jtl: 'Suraj Sir', sr: 'secrity'} )
} )

app.listen( port, () => {
  console.log(`Example app listening on port ${port}`)
})