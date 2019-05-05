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
};

const users = {
    zerobell: {
        nickname: '이영종',
        password: '1q2w3e4r!',
        admin: true
    },
    paristaxidriver: {
        nickname: '거니거니',
        password: 'geonlee',
        admin: false
    },
    eunjin: {
        nickname: '홍은진',
        password: 'eunjinhong',
        admin: false
    },
    chaewon: {
        nickname: '공채원',
        password: 'swmaestro',
        admin: false
    },
    chimchak: {
        nickname: '침착맨',
        password: 'chimchak',
        admin: false
    },
    lovelyzkei: {
        nickname: '슈퍼스타케이',
        password: 'lovelyz',
        admin: false
    },
    choerry: {
        nickname: '카드값줘최리',
        password: 'loona',
        admin: false
    }
}

const articles = { 
    1: {
        title: '안녕하세요? 이것은 첫번째 글입니다.',
        videoId: 'jNQXAC9IVRw',
        authorId: 'zerobell',
        content: '<p>뭐요시발</p>',
        datetime: new Date(2019, 0, 1, 0, 0, 1)
    },
    3: {
        title: '어떤 인성터진 놈이 첫 글 씀',
        videoId: 'bxrlpY6MiGA',
        authorId: 'paristaxidriver',
        content: '<p>가정교육 독학하신듯</p><p>ㅉㅉ</p>',
        datetime: new Date(2019, 0, 1, 13, 10, 0)
    },
    4: {
        title: '2번글 누가 쓰고 지웠어요?',
        videoId: 'qeqTz6itlR4',
        authorId: 'eunjin',
        content: '<p>누구죵?</p>',
        datetime: new Date(2019, 0, 1, 14, 11, 13)
    },
    5: {
        title: '내가 지웠다',
        videoId: 'KGQEnx67lsU',
        authorId: 'chimchak',
        content: '<p>뭐요</p>',
        datetime: new Date(2019, 0, 2, 1, 12, 19)
    },
    6: {
        title: '제가 좋아하는 뮤비',
        videoId: 'VBbeuXW8Nko',
        authorId: 'choerry',
        content: '<p>Love Cherry Motion</p><p>이달의 소녀 많이 사랑해주세요~~ ^.^</p>',
        datetime: new Date(2019, 0, 2, 13, 11, 10)
    },
    7: {
        title: '벌써부터 데이터 만들기가 귀찮네요',
        videoId: 'qIinYt5nUII',
        authorId: 'chimchak',
        content: '<p>침착침착</p>',
        datetime: new Date(2019, 0, 2, 14, 11, 12)
    },
    8: {
        title: '킹갓엠퍼러충무공마제스티제너럴러블리즈',
        videoId: 'v7qisJ_KuYI',
        authorId: 'lovelyzkei',
        content: '<p>아츄 많이 들어주세요</p>',
        datetime: new Date(2019, 0, 3, 0, 0, 1)
    },
    9: {
        title: '요즘 게임 스트리머 중엔 연두가 좋은듯',
        videoId: 'gjbxkzJc2ok',
        authorId: 'zerobell',
        content: '<p>뭐요시발</p>',
        datetime: new Date(2019, 1, 1, 0, 0, 1)
    },
    10: {
        title: '노는게 대수니~',
        videoId: 'S_IBk0RCsOo',
        authorId: 'lovelyzkei',
        content: '<p>날 끄는 그래비티</p>',
        datetime: new Date(2019, 1, 2, 3, 0, 1)
    },
    11: {
        title: '오드아이써클이 최고임',
        videoId: 'tyInv6RWL0Q',
        authorId: 'choerry',
        content: '<p>네</p>',
        datetime: new Date(2019, 1, 2, 5, 10, 1)
    },
    12: {
        title: '노래나 듣고 갑시다',
        videoId: 'ylKceqGwbj4',
        authorId: 'paristaxidriver',
        content: '<p>명곡 아님?</p>',
        datetime: new Date(2019, 1, 2, 10, 5, 1)
    },
    13: {
        title: '노래나 듣고 갑시다2',
        videoId: 'U0fk5L1ifbo',
        authorId: 'paristaxidriver',
        content: '<p>명곡인 듯</p>',
        datetime: new Date(2019, 1, 2, 11, 15, 1)
    },
    14: {
        title: '슬슬 제목 아이디어도 떨어져감',
        videoId: 'kPRA0W1kECg',
        authorId: 'eunjin',
        content: '<p>내용은 절대로 2줄을 넘지 않지</p>',
        datetime: new Date(2019, 1, 3, 10, 3, 1)
    },
    15: {
        title: '채원님이 글이 없는 것도 이상하니까',
        videoId: 'zH_omFPqMO4',
        authorId: 'chaewon',
        content: '<p>아직 이 글에 비디오 뭐 넣을지 생각도 안 해봄.</p>',
        datetime: new Date(2019, 1, 3, 13, 1, 1)
    },
    16: {
        title: '새로운 세상 유토피아',
        videoId: 'ybpV8h-RPyk',
        authorId: 'zerobell',
        content: '<p>접지전사..</p>',
        datetime: new Date(2019, 1, 3, 15, 10, 7)
    },
    17: {
        title: '이달소 노래 하나 더 투척함',
        videoId: 'cG7FkoNKBzI',
        authorId: 'choerry',
        content: '<p>아ㅇ아아아아아아아</p>',
        datetime: new Date(2019, 1, 4, 9, 3, 12)
    },
    18: {
        title: '러블리즈 노래도 하나 더 투척함',
        videoId: 'wMCoQaE0LvQ',
        authorId: 'lovelyzkei',
        content: '<p>네</p><p>네</p><p>네</p><p>네</p><p>네</p><p>네</p>',
        datetime: new Date(2019, 1, 4, 10, 4, 7)
    },
    19: {
        title: '이달의 소녀 한번 더 갑시다',
        videoId: 'XEOCbFJjRw0',
        authorId: 'choerry',
        content: '<p>그래서 다음 컴백 언젠데</p>',
        datetime: new Date(2019, 1, 5, 11, 12, 34)
    },
    20: {
        title: '심각하네',
        videoId: 'Rb2FyIsTnO4',
        authorId: 'paristaxidriver',
        content: '<p>이러라고 만든 사이트가 아닌데 아이돌판 됨</p>',
        datetime: new Date(2019, 1, 10, 12, 3, 1)
    },
    21: {
        title: '또 러블리즈네',
        videoId: '40Z9-kr504w',
        authorId: 'lovelyzkei',
        content: '<p>여기엔 뭐 넣냐</p>',
        datetime: new Date(2019, 2, 1, 0, 0, 1)
    },
    22: {
        title: '안녕하세요? 이것은 22번째 글입니다.',
        videoId: 'F8UXcVh-d5E',
        authorId: 'zerobell',
        content: '<p>이거 어느 세월에 다 DB에 처넣지</p>',
        datetime: new Date(2019, 2, 10, 0, 0, 1)
    },
    23: {
        title: '이달의 소녀',
        videoId: '_qJEoSa3Ie0',
        authorId: 'choerry',
        content: '<p>저달의 소녀</p>',
        datetime: new Date(2019, 2, 15, 3, 1, 1)
    }
}

const comments = {
    1: {
        1: {
            authorId: 'choerry',
            content: '댓글 쓰기 귀찮다 진짜',
            datetime: new Date(2019, 0, 10, 1, 1, 1)
        },
        2: {
            authorId: 'zerobell',
            content: '더 이상 안 쓴다 진짜',
            datetime: new Date(2019, 2, 10, 1, 1, 1)
        }
    }
}

const commentMsgs = {
    invalidNo: {
        status: 'fail',
        msg: '유효하지 않은 번호의 코멘트입니다.'
    }
}

module.exports = {
    users,
    loginMsgs,
    articleMsgs,
    articles,
    comments,
    commentMsgs
}