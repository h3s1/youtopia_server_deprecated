const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 9000;
const PAGNATION_UNIT = 10;

const {
    users,
    loginMsgs,
    articleMsgs,
    articles,
    comments,
    commentMsgs
} = data;

app.get('/', (req, res) => {
    res.send('Server is working')
});

app.post('/login', (req, res) => {
    const userData = req.body;
    
    if (!userData.id || !userData.password) {
        res.status(400).json(loginMsgs.invalid.msg);
    }
    else if (users[userData.id] !== undefined && userData.password === users[userData.id].password) {
        res.json(loginMsgs.success.msg);
    }
    else {
        res.status(400).json(loginMsgs.fail.msg);
    }
});

app.route('/article')
    .get((req, res) => {
        const page = req.query.page === undefined ? 1 : parseInt(req.query.page);
        const arr = [];
        const keys = Object.keys(articles).map(e => parseInt(e)).sort((a, b) => a - b);
        let pointer = keys[keys.length - 1] - (page - 1) * PAGNATION_UNIT;
        let count = 0;

        while (count < PAGNATION_UNIT) {
            if (pointer <= 0) break;
            if (articles[pointer] === undefined) {
                pointer--;
                continue;
            }
            let article = {
                no: pointer,
                title: articles[pointer].title,
                img: 'https://img.youtube.com/vi/' + articles[pointer].videoId + '/0.jpg',
                author: users[articles[pointer].authorId].nickname,
                datetime: articles[pointer].datetime
            }
            pointer--;
            arr.push(article);
            count++;
        }
        res.json(arr);
    });

app.get('/article/:no', (req, res) => {
    if (!Number.isInteger(parseInt(req.params.no))) {
        res.status(400).json(articleMsgs.notNumber.msg);
        return;
    }
    
    const no = parseInt(req.params.no);
    if (articles[no] === undefined) {
        res.status(404).json(articleMsgs.notExist.msg);
    }
    else {
        res.json(articles[no]);
    }
})

app.get('/comment/:no', (req, res) => {
    if (!Number.isInteger(parseInt(req.params.no))) {
        res.status(400).json(commentMsgs.invalidNo.msg);
        return;
    }

    const no = parseInt(req.params.no);

    res.json(
        comments[no]
    )
})

app.listen(PORT, () => {
    console.log(`Listening... ${PORT}`);
});
