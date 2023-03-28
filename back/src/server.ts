import { app } from "./app";
import { AppDataSource } from "./data-source";
import "dotenv/config";

const PORT = process.env.PORT || 3001;

AppDataSource.initialize().catch((err) =>
  console.error("Error during Data Source initialization", err)
);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
