import { app } from "./app";
import { getAddress } from "./services/getAddress";
import { AddressInfo } from "net";

app.get("/address/:cep", getAddress)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});