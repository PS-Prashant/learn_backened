require('dotenv').config()

const cors = require('cors')
// import 'dotenv/config'

const express = require('express')  
// import express from 'express'

const app = express()

// const port = 3000 || 4000
const port = process.env.PORT  || 4000;

app.use(cors());

//------------cors--------------------
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Refresh-Access-Token,Accept, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,xAccessToken,Authorization');
  // intercept OPTIONS method
  if (req.method == 'OPTIONS') {
    res.sendStatus(204).end();
  } else {
    next();
  }
});
//-----------------------------------
// app.use(cors({
// 	origin: 'http://localhost:4200' // Replace with your frontend URL
// }));

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