import express from "express";
import {
  create,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controller/userController.js";
const route = express.Router();

route.post("/create", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.post("/update/:id", updateUserById);
route.post("/delete/:id", deleteUserById);

export default route;
