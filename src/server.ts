import { app } from "./app";
import logger from "./helpers/logger";

const { PORT } = process.env;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
