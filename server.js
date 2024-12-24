import "dotenv/config";
import app from "./src/config/app/app.js";

/* eslint-disable no-undef */
const PORT = process.env.SERVER_PORT ?? 3000;
const HOST = process.env.SERVER_HOST ?? "localhost";

app.listen(PORT, HOST, () => {
    console.log(`Server listening at http://${HOST}:${PORT}`);
});