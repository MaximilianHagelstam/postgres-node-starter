import { createConnection } from "typeorm";
import logger from "./logger";
import { DB_HOST, DB_PORT, DB_NAME, DB_PASSWORD, DB_USERNAME } from "./config";

const connectDb = async () => {
    try {
        await createConnection({
            type: "postgres",
            host: DB_HOST,
            port: DB_PORT,
            database: DB_NAME,
            username: DB_USERNAME,
            password: DB_PASSWORD,
            logging: false,
            synchronize: true,
            entities: ["src/entity/**/*.ts"],
            migrations: ["src/migration/**/*.ts"],
            subscribers: ["src/subscriber/**/*.ts"],
            cli: {
                entitiesDir: "src/entity",
                migrationsDir: "src/migration",
                subscribersDir: "src/subscriber"
            }
        });

        logger.info("Connected to db");
    } catch (err) {
        logger.error(err);
    }
};

export default connectDb;
