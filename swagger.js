//swagger
import swaggerJSDoc from "swagger-jsdoc";
import express from 'express';


const app = express();
const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Nation Express API with Swagger",
        version: "1.0.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Pedro Baez",
          email: "pedrobaezvilar@gmail.com",
        },
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            in: 'header',
            name: 'Authorization',
            description: 'Bearer token to access these api endpoints',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ['./controllers/*.js'],
  };
  
  const specs = swaggerJSDoc(options);
  export default specs;
  