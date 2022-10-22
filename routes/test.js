/**
 * @typedef Success
 * @property {integer} status.required - Successful response http status code - eg:200
 * @property {string} code.required - Successful response code - eg:TEST_SUCCESSFUL
 * @property {string} message.required - Successful response message - eg:Test is successful
 * @property {object} extra - Successful response extras - eg: {id:1,page:1}
 */


/**
 * @typedef XParams
 * @property {integer} x.required - X param - eg: 123
 * @property {integer} y.required - Y param - eg: 531
 */


module.exports = (router) => {
     /**
       * This route runs the test for the specified id
       * Test Route
       * @route GET /test/{id}
       * @param {string} id.path.required - Test ID
       * @param {string} page.query.required - Page Index
       * @group Test - Test operasyonları
       * @operationId getTestWithId
       * @produces application/json application/xml
       * @consumes application/json application/xml
       * @returns {Success.model} 200 - Success Model
       * @security JWT
     */
    router.get("/test/:id",async (req,res) => {
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


    /**
       * This route runs the test for the specified id
       * Test Route
       * @route POST /test/{id}
       * @param {string} id.path.required - Test ID - eg: jdkfsnjkfddfgk
       * @param {integer} page.query.required - Page Index - eg: 1
       * @param {XParams.model} xParams.body.required - Title - eg:Title
       * @group Test - Test operasyonları
       * @operationId postTestWithId
       * @produces application/json application/xml
       * @consumes application/json application/xml
       * @returns {Success.model} 200 - Success Model
       * @security JWT
     */
     router.post('/test/:id', async (req, res) => {
        console.log(req.body);
        res.json({
            status: 200,
            code: "TEST_SUCCESSFUL",
            message: "Test is successful",
            extra: {
                id: req.params.id,
                page: req.query.page,
                xParams: req.body
            }
        })
    })

}



