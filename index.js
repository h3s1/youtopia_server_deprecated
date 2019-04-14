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
    rightUser,
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

app.get('/comment/:no', (req, res) => {
    if (!Number.isInteger(parseInt(req.params.no))) {
        res.json(commentMsgs.invalidNo);
        return;
    }

    const no = parseInt(req.params.no);

    res.json({
        status: 'success',
        data: comments[no-1]
    })
})

app.listen(PORT, () => {
    console.log(`Listening... ${PORT}`);
});
