import { Response } from "express";

import { app } from "./app";
import logger from "./util/logger";

const { PORT } = process.env;
const { NODE_ENV } = process.env;

app.use((res: Response) => {
  res.status(404).send("404 - page not found");
  logger.info("Page not found");
});

app.listen(PORT, () => {
  logger.info(`Server running in ${NODE_ENV} on port ${PORT}`);
  logger.info("Press CTRL-C to stop\n");
});
