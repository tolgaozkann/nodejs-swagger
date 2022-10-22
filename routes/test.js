module.exports = (router) =>{
    router.get("/test/:id",async (req,res) =>{
        res.json({
            status : 200,
            code: "TEST_SUCCESSFULL",
            message : "Test is successfull",
            extra :{
                id: req.params.id,
                page : req.query.page
            }
        })
    })
}