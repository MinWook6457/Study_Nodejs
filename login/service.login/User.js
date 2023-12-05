const {User} = require('../../models')

const createUser = async(userData) => {
    const {
        login_email,
        password,
    } = userData

    const createUser = await User.create({
        login_email,
        password
    })
    return createUser
}

module.exports = {
    createUser
}