import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {UsersService} from "../users/users.service";
import {ConfigService} from '@nestjs/config';
import {createClient} from 'redis';
import { LoginUserDto } from './dto/login-user.dto';




@Injectable()
export class AuthService {

    private redisClient;

    constructor (
        private userService: UsersService,
        private configService: ConfigService,
        private jwtService: JwtService) {
            this.redisClient = createClient({
                url: `redis://${this.configService.get('REDIS_HOST')}:${this.configService.get('REDIS_PORT')}`,
            });

            this.redisClient.connect();
        }

        validateUser(email:string, password:string) {
            const user= this.userService
            .validateUser(email, password)
            if(user) {
                return user;
            }

            return null;
        }

        async login(user: LoginUserDto) {
            const userAuth = await this.validateUser(user.email, user.password);

            const payload = {...userAuth};
            const token = this.jwtService.sign(payload);

            await this.redisClient.set(token, 'active', {
                EX: this.configService.get("JWT_EXPIRES_IN"), 

            });

            return {
                token:token
            }
        }

        async logout(token: string){
            await this.redisClient.del(token);
        }



        async validateToken(token:string): Promise<boolean> {
            const result = await this.redisClient.get(token);
            return result === 'active';
        }

        }
    
        
        
        

