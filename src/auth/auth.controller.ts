import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Body() authPayloadDto: AuthPayloadDto) {
    const user = this.authService.validateUser(authPayloadDto);
    return user;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Res() res: Request) {
    console.log(res);
    // return req.user;
  }
}
