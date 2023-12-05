const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser') // body-parser 모듈 사용
const { sequelize } = require('./models'); // db.sequelize
const dotenv = require('dotenv');

dotenv.config()


const loginRouter = require('./login/routes.login')

const app = express();


sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결됨.');
    }).catch((err) => {
        console.error(err);
    });

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public'))); // html을 클라이언트에 제공하기 위한 미들웨어
app.use(cookieParser()); // 쿠키를 파싱하기 위한 미들웨어
app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded 타입의 form 데이터를 파싱하기 위한 미들웨어
app.use(express.json());

// 라우팅

app.use('/',loginRouter)


app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});


app.listen(3000, () => {
    console.log('server is running at 3000');
});







