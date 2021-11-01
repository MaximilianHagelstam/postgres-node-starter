import app from "./app";
import logger from "./utils/logger";
import { PORT } from "./utils/config";

app.listen(PORT, () => {
    logger.info(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
});
