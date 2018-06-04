import { UsersRepository } from "../repositories/users.repository";
import { Users } from "../models/users";
export declare class LoginController {
    private usersRepo;
    constructor(usersRepo: UsersRepository);
    login(login: any): Promise<Users | undefined>;
}
