import express from 'express'
const authenticationMiddleware = express.Router()

authenticationMiddleware.get('/', async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // IF no auth headers are provided
    // THEN return 401 Unauthorized error
    if (!authHeader) {
        return res.status(401).json({
            status: false,
            error: {
                message: 'Auth headers not provided in the request.'
            }
        });
    }
    next();
});

export default authenticationMiddleware