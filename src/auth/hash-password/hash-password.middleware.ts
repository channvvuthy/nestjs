import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashPasswordMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const { password } = req.body;

    // Only hash the password if it's present in the request
    if (password) {
      const saltOrRounds = 10; // Adjust the cost factor according to your security requirements and performance constraints
      req.body.password = await bcrypt.hash(password, saltOrRounds);
    }

    next();
  }
}
