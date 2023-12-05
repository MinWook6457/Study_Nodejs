require('dotenv').config()


const {User} = require('../../models')
const response = require('../../response')

const handleUserLogin = async(req,res) => {
 
    try{



    }catch(err){

    }
}

const handleUserRegister = async(req,res) => {
    const { user_id , login_email, password } = req.body
    const userData = {login_email,password}

    console.log(userData)
    try{
        const existUser = await User.findOne({where : {id : user_id}})

        if(existUser){
            return response(res,400,'중복되는 회원입니다.')
        }else{
            await createUser(userData)
        }

        return response(res,200,'회원 가입 성공')
    }catch(err){
        return response(res,500,'회원 가입 오류')
    }
}

module.exports = {
    handleUserLogin,
    handleUserRegister,

}