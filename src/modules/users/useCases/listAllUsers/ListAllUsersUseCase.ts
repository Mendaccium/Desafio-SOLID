import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User Not exists");
    }

    if (!user.admin) {
      throw new Error("User is not a Admin");
    }
    const list = this.usersRepository.list();
    console.log(list);
    return list;
  }
}

export { ListAllUsersUseCase };
