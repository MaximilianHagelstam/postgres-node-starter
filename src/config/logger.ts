import { format, createLogger, transports } from "winston";

const { combine, printf } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => `${timestamp} ${level}: ${stack || message}`);

const logger = createLogger({
  level: "info",
  format: combine(
    format.colorize(),
    format.timestamp({ format: "YYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    logFormat
  ),
  transports: [new transports.Console()]
});

export default logger;
