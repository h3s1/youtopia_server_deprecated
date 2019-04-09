const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 9000;
const PAGNATION_UNIT = 10;

const rightUser = {
    id : 'lovelyz',
    password: '1q2w3e4r!'
};

const loginMsgs = {
    invalid : {
        status: 'fail',
        msg : 'Id or Password Invalid!!'
    },
    success : {
        status: 'success',
        msg : ''
    },
    fail : {
        status: 'fail',
        msg : 'Id or Password isnt correct'
    }
};

const articleMsgs = {
    notNumber: {
        status: 'fail',
        msg: 'Article number is not a number.'
    },
    notExist: {
        status: 'faile',
        msg: 'Cannot find article matches with the number.'
    }
}

const articles = [
    {
        no: 1,
        title: '대망의 첫번째 글임',
        videoId: 'cG7FkoNKBzI',
        author: '카드값줘최리',
        content: '<p>이달의 소녀 파이팅~~~ ^ㅇ^</p>',
        datetime: '2019-04-05 13:00:00'
    },
    {
        no: 2,
        title: '이건 두번째 글임',
        videoId: 'v7qisJ_KuYI',
        author: '슈퍼스타케이',
        content: '<p>아츄</p>',
        datetime: '2019-04-05 13:13:25'
    },
    {
        no: 3,
        title: '아이돌 글 좀 그만 올려라 십덕새기들아',
        videoId: '_XulUbBra5M',
        author: '스피드웨건',
        content: '<p>좀 유익한 영상들을 올리셈</p>',
        datetime: '2019-04-06 01:12:24'
    }
]

app.get('/', (req, res) => {
    res.send('Server is working')
});

app.post('/login', (req, res) => {
    const userData = req.body;
    
    if (!userData.id || !userData.password) {
        res.json(loginMsgs.invalid);
    }
    else if (userData.id === rightUser.id && userData.password === rightUser.password) {
        res.json(loginMsgs.success);
    }
    else {
        res.json(loginMsgs.fail);
    }
});

app.route('/article')
    .get((req, res) => {
        const arr = []
        const threshold = articles.length - PAGNATION_UNIT < 0 ? 0 : articles.length - PAGNATION_UNIT;
        
        for (let i = articles.length - 1; i >= threshold; i--) {
            arr.push({
                no: articles[i].no,
                title: articles[i].title,
                author: articles[i].author,
                videoId: articles[i].videoId,
                datetime: articles[i].datetime
            });
        }
        res.json(arr);
    });

app.get('/article/:no', (req, res) => {
    if (!Number.isInteger(parseInt(req.params.no))) {
        res.json(articleMsgs.notNumber);
        return;
    }
    
    const no = parseInt(req.params.no);
    

    if (no > articles[articles.length - 1].no || no < 1) {
        res.json(articleMsgs.notExist);
    }
    else {
        res.json({
            status: 'success',
            data: articles[no-1]
        });
    }
})

app.listen(PORT, () => {
    console.log(`Listening... ${PORT}`);
});
