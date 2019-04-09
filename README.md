# Youtopia - Dummy Api server

## Endpoints

* /login
    - POST
        + Request
            - content-type : application/json
            - body : {"id" : "lovelyz", "password": "1q2w3e4r!"}
        + Response
            - content-type : application/json
            - body : {"status": "success", msg: ""}
* /article
    - GET
        + Response
            - content-type : application/json
            - body : 아래 참조
<pre>[
  {
    "no": 3,
    "title": "아이돌 글 좀 그만 올려라 십덕새기들아",
    "author": "스피드웨건",
    "videoId": "_XulUbBra5M",
    "datetime": "2019-04-06 01:12:24"
  },
  {
    "no": 2,
    "title": "이건 두번째 글임",
    "author": "슈퍼스타케이",
    "videoId": "v7qisJ_KuYI",
    "datetime": "2019-04-05 13:13:25"
  },
  {
    "no": 1,
    "title": "대망의 첫번째 글임",
    "author": "카드값줘최리",
    "videoId": "cG7FkoNKBzI",
    "datetime": "2019-04-05 13:00:00"
  }
]</pre>
* /article/:no
    - GET
        + Request
            - example : /article/1
        + Response
            - content-type : application/json
            - body : 아래 참조
<pre>{
  "status": "success",
  "data": {
    "no": 1,
    "title": "대망의 첫번째 글임",
    "videoId": "cG7FkoNKBzI",
    "author": "카드값줘최리",
    "content": "\b\b<p>이달의 소녀 파이팅~~~ ^ㅇ^</p>",
    "datetime": "2019-04-05 13:00:00"
  }
}
</pre>