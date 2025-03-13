import UserRepository from "../database/repositories/user.repository.js";

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async getUsers(){
        return "reached user services layer"
        //return this.userRepository.createUser(userData);
    }
}

export default UserService;
