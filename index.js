const express = require("express");
const ExpressSwaggerFnGenerator = require("express-swagger-producer");
const routes = require("./routes/index");

const app = express();
const router = express.Router();

routes.forEach((routerFn) => {
    routerFn(router);
});
app.use("/api",router);

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.use("/api",router);


let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a server with enabled Swagger documentation feature',
            title: 'Simple Server',
            version: '1.0.0',
        },
        host: 'localhost',
        swagger: '2.0', //  or openapi:'3.0.0'
        basePath: '/api',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "Basic apiKey authorization in the system",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/**/*.js'] //Path to the API handle folder
};

const ExpressSwaggerFn = ExpressSwaggerFnGenerator(app); // Please add this line where your routes layer starts
ExpressSwaggerFn(options); // Enable this if you want to generate Swagger document

app.listen(5001,()=>{
    console.log("Server is working on  5001. port");
})