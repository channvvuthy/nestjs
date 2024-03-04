import {
  Body,
  Controller,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { responseError } from 'src/utils/responseError';
import { responseSuccess } from 'src/utils/responseSuccess';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  /**
   * Create a new user using the provided user data.
   *
   * @param {CreateUserDto} createUserDto - the data for creating a new user
   * @param {Response} res - the response object for sending the result
   * @return {Promise<any>} a Promise that resolves with the created user or rejects with an error
   */
  createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    return this.userService
      .createUser(createUserDto)
      .then((user: any) => responseSuccess(res, user))
      .catch((error: any) => responseError(res, error));
  }
}
