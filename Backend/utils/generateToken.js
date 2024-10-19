import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const generateToken = (email, type) => {
    dotenv.config()
    return jwt.sign({email,type,},
        "SECRET",
        //  process.env.JWT_SECRET,
          {
        expiresIn: '30d'
    })
}

export default generateToken