const express=require("express")
const app=express();
const cors=require("cors")
app.use(cors())

const courses=require("./data/CourseName.json");
const CourseDetails=require("./data/CourseDetails.json")
const aboutTopic=require("./data/AboutTopic.json")


const port=process.env.PORT || 5000


app.get("/courses",(req,res)=>{
    res.send(courses)
  
})
app.get("/courseDetails/:id",(req,res)=>{
    const id =req.params.id
    const selectedCourse=CourseDetails.find(n=>n.id===id)
    res.send(selectedCourse)
})

app.get("/Topic/:id",(req,res)=>{
    const id =req.params.id
    const topic=aboutTopic.find(num=>num.id===id)
    res.send(topic)
})
app.listen(port,()=>{
    console.log(port)
})
