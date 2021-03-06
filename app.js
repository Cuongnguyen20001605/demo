const express=require('express')

const app=express()


app.set('view engine','ejs')
app.set('views','./views')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.render('index')
})

const port=process.env.PORT||3000

app.listen(port,()=>console.log('start server'))