import jsonwebtoken from 'jsonwebtoken'
import responseHandler from "../models/user.model.js"
import userModel from '../models/user.model.js'

const tokenDecode = (req) => {
    try{
        const beareHeader = req.headers["authorization"]

        if(beareHeader){
            const token = beareHeader.split(" ")[1]

            return jsonwebtoken.verify(
                token,
                process.env.TOKEN_SECRET
            )
        }

        return false
    }catch{
        return false
    }
}