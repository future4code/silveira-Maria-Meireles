import { app } from "./app";
import { AddressInfo } from 'net';
import { createUser } from './endpoints/createUser'
import { getAllUsers } from "./endpoints/getAllUsers";
import { createProduct }from './endpoints/createProduct';
import { getAllProducts } from './endpoints/getAllProducts';
import { registerPurchase } from "./endpoints/purchaseRegister";
import { getUserPurchases } from "./endpoints/getUserPurchases";

app.post("/users", createUser);

app.get("/users", getAllUsers);

app.post("/products", createProduct);

app.get("/products", getAllProducts);

app.post("/purchases", registerPurchase);

app.get("/:user_id/purchases", getUserPurchases);

app.listen(3003, () => {
    console.log("server is running on port 3003.")
})