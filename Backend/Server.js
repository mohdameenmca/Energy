
const express = require("express");
const connectDB = require("./config/connectDB")

const profile = require('./routes/profile');
const newBill = require('./routes/bill');
const Read = require('./routes/read')
const cors = require("cors")
connectDB();

const app = express();

app.use(express.json())
app.use(cors());
app.use('/api',profile);
app.use('/api',newBill);
app.use('/api',Read);

app.listen(process.env.PORT, () => {
  console.log(`Server running at localhost:${process.env.PORT}/${process.env.NODE_ENV}/`);
});
