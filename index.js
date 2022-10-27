const express=require("express")
const app=express();
const cors=require("cors")
app.use(cors())

const courses=require("./data/CourseName.json");
const CourseDetails=require("./data/CourseDetails.json")


const port=process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("new math app")
})

app.get("/courses",(req,res)=>{
    res.send(courses)
  
})
app.get("/courseDetails/:id",(req,res)=>{
    const id =req.params.id
    const selectedCourse=CourseDetails.find(n=>n.id===id)
    res.send(selectedCourse)
})
app.listen(port,()=>{
    console.log(port)
})
