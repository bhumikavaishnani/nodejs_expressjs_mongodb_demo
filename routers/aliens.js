const express = require("express")
const router = express.Router()
const app = express();
const Alien = require('../models/alien');
const alien = require("../models/alien");

app.use(express.json({ extended: true }));

router.get('/',async(req,res) =>{
    try{
        const aliens = await Alien.find();
        res.json(aliens)
    }catch(err){
        res.send("Error" + err)
    }
    
})

router.get('/:id',async(req,res) =>{
    try{
        const aliens = await Alien.findById(req.params.id);
        res.json(aliens)
    }catch(err){
        res.send("Error" + err)
    }
    
})

router.patch('/:id', async(req,res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const a1 = await alien.save();
        res.json(a1) 
    }catch(err){
        res.send("Error" + err)
    }
})

router.post('/',async(req,res) =>{
    const alien = new Alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    });
    try{
        const a1 = await alien.save();
        res.json(a1);
    }catch(err){
        res.send("err"+err);
    }

});

router.delete('/:id',async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id);
        const a1 = alien.deleteOne();
        res.json(a1);
    }catch(err)
    {
        res.send("err"+err)
    }
})

module.exports = router