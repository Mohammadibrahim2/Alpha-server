const express=require("express")
const app=express();
const cors=require("cors")
app.use(cors())

const courses=require("./data/CourseName.json")


const port=process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("new math app")
})

app.get("/courses",(req,res)=>{
    res.send(courses)
  
})
app.listen(port,()=>{
    console.log(port)
})
