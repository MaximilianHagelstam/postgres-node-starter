import { createConnection } from "typeorm";
import logger from "./logger";
import { DB_NAME, DB_PASSWORD } from "./config";

const connectDb = async () => {
    try {
        await createConnection({
            type: "postgres",
            database: DB_NAME,
            username: "postgres",
            password: DB_PASSWORD,
            logging: false,
            synchronize: true
        });

        logger.info("Connected to db");
    } catch (err) {
        logger.error(err);
    }
};

export default connectDb;
