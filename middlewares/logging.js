import winston from "winston";

const logger = winston.createLogger({
    level: "info",
    exitOnError: true,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
            (info) => `${info.timestamp} ${info.level}: ${info.message}`
        )
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "log/app.log" }),
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'log/exception.log' }),
    ],
    rejectionHandlers: [
        new winston.transports.File({ filename: 'log/rejections.log' }),
    ],
});

export default logger;