module.exports = (sequelize,DataTypes) => {
    const user = sequelize.define('User',
        {
            id : {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull : false,
                comment: '유저 고유 id',
            },
            login_id : {
                type : DataTypes.STRING,
                allowNull : false,
                comment : '로그인 시 필요한 아이디'
            },
            password : {
                type : DataTypes.STRING,
                allowNull : false,
                comment : '로그인 시 필요한 패스워드'
            }
        },
        { 
            timestamps: true,
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    )
    return user
}

