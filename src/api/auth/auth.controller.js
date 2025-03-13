import AuthService from "../../services/auth.service.js";

const authService = new AuthService();

export const registerUser = async (req, res) =>{
    console.log(req.body);
    try {
        const user = await authService.createUser(req.body);
        console.log(`User at controller response: ${user}`)
        res.status(201).json({user});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const loginUser = (req, res) =>{
    console.log(req.body);
    res.send("Login initiated...");
};

export const logoutUser = (req, res) =>{
    console.log(req.body);
    res.send("Logout initiated...");
};
