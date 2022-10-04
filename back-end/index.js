const express = require("express")
const cors = require("cors");
const usersDatas = require('./data.json')
const corsOptions = {
  origin: '',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
const app = express()
app.use(cors(corsOptions))
const port = 8000





app.get("/users", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json({users: usersDatas});
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})