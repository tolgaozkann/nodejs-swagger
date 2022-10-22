const express = require("express");
const ExpressSwaggerFnGenerator = require("express-swagger-producer");
const routes = require("./routes/index");

const app = express();
const router = express.Router();

routes.forEach((routerFn) => {
    routerFn(router);
});
app.use("/api",router);

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));


let options = {
    swaggerDefinition :{
        info : {
            description : "First NodeJs Project",
            title:"First Api",
            version:"1.0.0"
        },
        host:"localhost",
        swagger:"2.0", //openapi: '3.0.0'
        basePath:"/api",
        produces:[
            "application/json",
            "application/xml"
        ],
        schemas: ['http','https'],
        securityDefinition:{
            JWT:{
                type:'apikey',
                in:'header',
                name:'Authorization',
                description:'Basic apikey authorization in the system'
            }
        }
    },
    basedir : __dirname,
    files: ['./routes/**/*.js']
}



app.listen(5001,()=>{
    console.log("Server is working on  5001. port");
})