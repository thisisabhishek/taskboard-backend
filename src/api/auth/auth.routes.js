import express from "express";

const router = express.Router();

// Registration Route
router.post("/register", (req, res) =>{
    console.log(req.body);
    res.send("Register intiated...");
});

// Login Route
router.post("/login", (req, res) =>{
    console.log(req.body);
    res.send("Login initiated...");
});

// Logout Route
router.post("/logout", (req, res) =>{
    res.send("Hello World I am a user");
});

export default router;
