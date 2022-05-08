import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const userAlreadyExistis = this.usersRepository.findById(user_id);

    if (!userAlreadyExistis) {
      throw new Error("User does not exist!");
    }
    return userAlreadyExistis;
  }
}

export { ShowUserProfileUseCase };
