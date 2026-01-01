
import colors from 'colors';
// @ts-ignore
import server from "./server.ts";

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(colors.bgYellow.magenta.italic(`Server is running on port ${port}`));
})