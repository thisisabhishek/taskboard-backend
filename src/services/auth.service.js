import AuthRepository from "../database/repositories/auth.repository.js";
import bcrypt from "bcrypt";


class AuthService {
    constructor(){
        this.authRepository = new AuthRepository();
    }
    
    async createUser(userData){
        const { name, email, password } = userData;

        if (!email || !password) {
			throw new Error("Email and Password are required.");
		}
        // Regular expression for email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Validate email
		if (!emailRegex.test(email)) {
			throw new Error("Email address is invalid.");
		}

        /* 
			Validate password length
			TODO - We should add more checks for Password strength
			And this should be displayed on the Frontend too in some form
		*/
		if (password.length < 8) {
			throw new Error("Password must be atleast 8 characters long.");
		}
		let hashPassword = await bcrypt.hash(password, 10)

		const user = await this.authRepository.createUser(name, email, hashPassword);
		delete user.password;
		return user;
    }
}

export default AuthService;
