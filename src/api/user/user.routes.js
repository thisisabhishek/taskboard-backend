import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
    res.send({ id: 1, email: 'abhishek@example.com', role: 'Admin' });
});

userRoutes.post("/", (req, res) => {
    res.send("Hello World");
});

userRoutes.put("/", (req, res) => {
    res.send("Hello World");
}); 

userRoutes.delete("/", (req, res) => {
    res.send("Hello World");
}); 

userRoutes.get("/:id", (req, res) => {
    res.send("Hello World");
});

export default userRoutes;