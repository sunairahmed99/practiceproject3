import app from "./app.js";





app.get('/',async(req,res)=>{

    res.end("welcome to nodejs application")
})

app.listen(3000,()=>{

    console.log(`port is running 3000`)
})