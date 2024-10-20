
require('dotenv').config(); 

const express= require('express'); 
const app= express(); 

app.use(express.json()); 

// Connect to the mongoose server
const db= require('./database/connect'); 
db(); 

// Imprting the schema 
const model= require('./Model/user-data'); 



// Creating a route 
app.get('/', (req,res)=>{
    res.send('Hello World!'); 
})

app.post('/input', async (req,res)=>{
    const {name,address,Father_Name,Mother_Name,email}=req.body; 
    console.log(name, address, Father_Name, Mother_Name, email); 

    res.json({
        message:'Data received successfully',
    })

    // Creating a schema into the database 
    await model.create({
        name:name, 
        address:address, 
        Father_Name:Father_Name, 
        Mother_Name:Mother_Name, 
        email:email, 

    })

}); 

// To find the all the records in the database 
app.get('/show_all', async (req, res)=>{
    await res.json({
        message:'Data received successfully', 
        data:await model.find(),
    })
} )

// To find the reacord with the help of id 
app.get ('/search/:id', async (req,res)=>{
  
  const id = req.params.id; 
  const userid= await model.findUserById(id); 
 
  res.json({
    message:'Data received successfully', 
    data:userid,
  })
})

// To delete the record 
app.delete ('/delete/:id', async(req,res)=>{
    const id = req.params.id; 
    const deleteUser= await model.findByIdAndDelete(id);

    res.json({
        message:'Data deleted successfully', 
        data:deleteUser
    })
})


// For update the record 
app.put('/update/:id', async(req,res)=>{
    const id = req.params.id; 
    const updateUser= await model.findByIdAndUpdate(id,req.body); 
    res.json({
        message:'Data update successfully', 
        data:updateUser
    })
}); 

app.listen(process.env.PORT, ()=>{
    console.log('Listening on port '+process.env.PORT);
}); 

