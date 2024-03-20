const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const url = process.env.MONGODB_URL

const Signup = require('../routes/Signup')
const StudentRouter = require('../routes/StudentRouter')
const StudentSearchRouter = require('../routes/StudentSearchRouter')
const StudentAttendenceRoutes = require('../routes/StudentAttendenceRoutes')
const AttendenceFilter = require('../routes/AttendenceFilter')
const Login = require('../routes/LoginRoutes')

const app = express()
app.use(cors({
    origin:"https://studentattendence.vercel.app",
    method: ["GET","POST","PUT","PATCH","DELETE"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}
))
app.use(express.json())
app.use("/api",Signup)
app.use("/api",Login)
app.use("/api/student",StudentRouter)
app.use("/api/student",StudentSearchRouter)
app.use("/api/student",StudentAttendenceRoutes)
app.use("/api/student",AttendenceFilter)

app.get("/",(req,res)=>{
    res.send("Hello World")
})

mongoose.connect('mongodb+srv://database:a2gvYKAKH8QjLYOC@cluster0.1hei1cc.mongodb.net/Attendancesystem?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("Mongoose db has been connected"))
.catch((err)=>console.log(`mongoodb as been not conected ${err}`))

app.listen(port,()=>{
    console.log(`server has been started ${port}`)
})
