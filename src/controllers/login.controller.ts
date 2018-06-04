import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { post, get, requestBody } from "@loopback/rest";
import { Users } from "../models/users";

export class LoginController {

  constructor(
    @repository(UsersRepository.name) private usersRepo: UsersRepository
  ) {}

  @post('/login')
  async login(@requestBody()login:any) {
    var users = await this.usersRepo.find();
    var username = login.username;
    var password = login.password;
    for (var i =0; i < users.length; i++){
      var user = users[i];
      if (user.username === username && user.password === password) {
        return user;
      }
    }
  }
}