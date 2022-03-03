import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";


ReactDOM.render(<App />, document.getElementById("root"));
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
