import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoresExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }
  async validate(payload: { id: number }) {
    return {
      id: payload.id,
    }
  }
}
