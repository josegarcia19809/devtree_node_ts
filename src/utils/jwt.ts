import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';
export const generateJWT = (payload: JwtPayload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '180d',
    });
    return token;
}