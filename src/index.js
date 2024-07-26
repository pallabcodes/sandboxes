// [REMOVE]: This is dummy code for example
const app = require("./app");
const sequelize = require("./config/db.config");
const logger = require("./utils/logger");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
}

startServer();
