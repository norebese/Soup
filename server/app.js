import e from 'express'
import cors from 'cors'

import { config } from './config/config.js'
import { connectDatabases } from './config/database.js'

// import mainRouter from './router/main.js'
import authRouter from './router/auth.js'
// import adminRouter from './router/admin.js'

const app = e();

// 미들웨어 선언
app.use(cors());
app.use(e.json());
app.use(e.urlencoded({ extended: true }));  // 더 복잡한 구조의 URL-encoded 데이터를 파싱 미들웨어


// 라우터 선언
// app.use('/main', mainRouter)
app.use('/auth', authRouter)
// app.use('/admin', adminRouter)


// 404 Not Found 처리 미들웨어
app.use('/', (req, res, next) => {
    res.status(404).send('Not Found');
});


connectDatabases().then(() =>{
    app.listen(config.server.hostport, ()=>{
        console.log(`Server is running ${config.server.hostport}`)
    })
}).catch(error => {
    console.error('Failed to start the server:', error);
});

