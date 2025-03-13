import prisma from "../connection.js";

class AuthRepository {
    async createUser(name, email, password){
        const user = await prisma.users.create({
            data: {
                name,
                email,
                password
            }
        })
        if(user) {
            console.log(`Created user is: ${user}`)
            return user
        }
    }
}

export default AuthRepository;
