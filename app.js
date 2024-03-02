import express from 'express';
import cors from 'cors';
//middlewares
import authenticationMiddleware from './middlewares/authentication.js';
//controllers
import regions from './controllers/regions-controller.js';
import guests from './controllers/guests-controller.js';
//logger
import logger from './middlewares/logging.js';
// swagger
import specs from './swagger.js';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(express.json());
app.use(cors());
app.options('*', cors()) // include before other routes

app.use((req, res, next) => {
    // Log an info message for each incoming request
    logger.info(`Received a ${req.method} request for ${req.url}`);
    next();
});

app.use('/regions',authenticationMiddleware, regions);
app.use('/guests',authenticationMiddleware, guests);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server Listening on PORT:", PORT));