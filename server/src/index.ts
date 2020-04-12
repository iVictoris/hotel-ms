// yarn add dotenv; yarn add -D @types/node tslint typescript;
import dotenv from "dotenv";
import server from "./api";
dotenv.config();

const port = process.env.PORT || 8080; // default port to listen

// start the Express server
server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
