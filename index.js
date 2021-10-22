const express=require("express");
const cors=require("cors");
const rateLimit=require("express-rate-limit");
require('dotenv').config();

const app=express();
app.use(express.static('public'))

const PORT=process.env.PORT || 3000



//Rate limiting

const limiter=rateLimit({
    windowMs: 10*60*1000, //10 mins
    max: 5
});

app.use(limiter);
app.set('trust proxy',1);
//routes
app.use('/api',require('./routes/weather'));

//Enable cors
app.use(cors());

app.listen(PORT,()=> console.log("Server running on port 3000")
)