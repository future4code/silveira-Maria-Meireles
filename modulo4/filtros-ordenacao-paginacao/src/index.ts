import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByName } from "./endpoints/getUserByName";
import {getUsersByType} from './endpoints/getUsersByType';
import { getOrderedUsers } from './endpoints/getOrderedUsers';

app.get("/users/sort", getOrderedUsers);
app.get("/users", getAllUsers);
app.get("/user", getUserByName);
app.get("/users/:type", getUsersByType);

