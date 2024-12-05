import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeusers = [
  {
    id: 1,
    username: 'anson',
    password: 'password',
  },
  {
    id: 2,
    username: 'jack',
    password: 'password01',
  },
];

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService) {}

  validateUser({ username, password }: AuthPayloadDto) {
    const findUser = fakeusers.find((user) => user.username === username);
    if (!findUser) {
      return null;
    }
    if (password === findUser.password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
}
