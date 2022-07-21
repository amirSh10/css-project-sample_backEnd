const router=require("express").Router()


const forms=[
    {
        name:"amir",
        family:"shahidi"
    }
]

router.get(`/`,(req,res)=>{
    res.send(forms)
})

router.post(`/add`,(req,res)=>{
    
})


module.exports=router;