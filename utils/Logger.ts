import { createLogger, format, transports, } from 'winston';
import { Page, Browser } from "@playwright/test";


const logger = createLogger({
    level: 'debug',
    format: format.combine(
        format.colorize(),
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        format.printf(({ timestamp, level, message }) => {
            return `[${level}] ${timestamp} : ${message}`;
        })
    ),
    transports: [
        new transports.Console({
        }),
        new transports.File({
            filename: 'logs/error.log',
            level: 'error'
        }),
        new transports.File({
            filename: 'logs/combined.log'
        }),
    ],
});

const LogInfo = (...message: string[]) => {
    logger.info(message.join(' '));}
const LogError = ( ...message: string[]) => {
    logger.error(message.join(' '));}
const LogWarn = ( ...message: string[]) => {
    logger.warn(message.join(' '));}
const LogDebug = ( ...message: string[]) => {
    logger.debug(message.join(' '));}

export { LogInfo, LogError, LogWarn, LogDebug, logger };