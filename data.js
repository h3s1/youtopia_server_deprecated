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
        status: 'fail',
        msg: 'Cannot find article matches with the number.'
    }
}

const articles = [
    {
        no: 1,
        title: '대망의 첫번째 글임',
        videoId: 'cG7FkoNKBzI',
        author: '카드값줘최리',
        content: '<p>이달의 소녀 파이팅~~~ ^ㅇ^</p>',
        datetime: '2019-04-05 13:00:00'
    },
    {
        no: 2,
        title: '이건 두번째 글임',
        videoId: 'v7qisJ_KuYI',
        author: '슈퍼스타케이',
        content: '<p>아츄</p>',
        datetime: '2019-04-05 13:13:25'
    },
    {
        no: 3,
        title: '아이돌 글 좀 그만 올려라 십덕새기들아',
        videoId: '_XulUbBra5M',
        author: '스피드웨건',
        content: '<p>좀 유익한 영상들을 올리셈</p>',
        datetime: '2019-04-06 01:12:24'
    }
]

const comments = [
    [{
        no: 1,
        id: 'chimchak',
        nickname: '침착맨',
        content: '그건 또 무슨 듣보잡 그룹이죠?',
        datetime: '2019-04-05 13:11:12'
    },
    {
        no: 2,
        id: 'choerry',
        nickname: '카드값줘최리',
        content: '님 지랄하지 마세요;;',
        datetime: '2019-04-05 14:12:13'
    }],
    [{
        no: 1,
        id: 'geon_this',
        nickname: '파리택시운전사',
        content: '너 아까 글 올린 그 놈이지',
        datetime: '2019-04-05 14:00:02'
    },
    {
        no: 2,
        id: 'keikei',
        nickname: '슈퍼스타케이',
        content: '아닌데아닌데아닌데',
        datetime: '2019-04-05 14:11:45'
    }],
    [{
        no: 1,
        id: 'choerry',
        nickname: '카드값줘최리',
        content: '아니 아이돌이 어때서',
        datetime: '2019-04-06 07:02:34'
    },
    {
        no: 2,
        id: 'chimchak',
        nickname: '침착맨',
        content: '정말 유익한 동영상이네요~~ ^^'
    },
    {
        no: 3,
        id: 'geon_this',
        nickname: '파리택시운전사',
        content: "ㅆㅇㅈ합니다."
    }]
]

const commentMsgs = {
    invalidNo: {
        status: 'fail',
        msg: '유효하지 않은 번호의 코멘트입니다.'
    }
}

module.exports = {
    rightUser,
    loginMsgs,
    articleMsgs,
    articles,
    comments,
    commentMsgs
}