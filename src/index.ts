
// @ts-ignore
import server from "./server.ts";

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log("server is running on port ", port);
})