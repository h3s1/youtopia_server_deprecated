# Youtopia - Dummy Api server

## Endpoints

* /login
    - POST
        + Request
            - content-type : application/json
            - body : {"id" : "lovelyz", "password": "1q2w3e4r!"}
        + Response
            - status : 200 OK
            - content-type : application/json
            - body : empty
* /article
    - GET
        + Response
            - content-type : application/json
            - body : 아래 참조
<pre>[
  {
    "no":23,
    "title":"이달의 소녀",
    "img":"https://img.youtube.com/vi/_qJEoSa3Ie0/0.jpg",
    "author":"카드값줘최리",
    "datetime":"2019-03-14T18:01:01.000Z"
    },
  {
    "no":22,
    "title":"안녕하세요? 이것은 22번째 글입니다.",
    "img":"https://img.youtube.com/vi/F8UXcVh-d5E/0.jpg",
    "author":"이영종","datetime":"2019-03-09T15:00:01.000Z"
  },
  {
    "no":21,
    "title":"또 러블리즈네",
    "img":"https://img.youtube.com/vi/40Z9-kr504w/0.jpg",
    "author":"슈퍼스타케이","datetime":"2019-02-28T15:00:01.000Z"
  },
  {
    "no":20,"title":"심각하네",
    "img":"https://img.youtube.com/vi/Rb2FyIsTnO4/0.jpg",
    "author":"거니거니",
    "datetime":"2019-02-10T03:03:01.000Z"
  },
  {
    "no":19,"title":"이달의 소녀 한번 더 갑시다",
    "img":"https://img.youtube.com/vi/XEOCbFJjRw0/0.jpg",
    "author":"카드값줘최리",
    "datetime":"2019-02-05T02:12:34.000Z"
  },
  {
    "no":18,
    "title":"러블리즈 노래도 하나 더 투척함",
    "img":"https://img.youtube.com/vi/wMCoQaE0LvQ/0.jpg",
    "author":"슈퍼스타케이",
    "datetime":"2019-02-04T01:04:07.000Z"
  },
  {
    "no":17,
    "title":"이달소 노래 하나 더 투척함",
    "img":"https://img.youtube.com/vi/cG7FkoNKBzI/0.jpg",
    "author":"카드값줘최리",
    "datetime":"2019-02-04T00:03:12.000Z"
  },
  {
    "no":16,
    "title":"새로운 세상 유토피아",
    "img":"https://img.youtube.com/vi/ybpV8h-RPyk/0.jpg",
    "author":"이영종",
    "datetime":"2019-02-03T06:10:07.000Z"
  },
  {
    "no":15,
    "title":"채원님이 글이 없는 것도 이상하니까",
    "img":"https://img.youtube.com/vi/zH_omFPqMO4/0.jpg",
    "author":"공채원",
    "datetime":"2019-02-03T04:01:01.000Z"
  },
  {
    "no":14,
    "title":"슬슬 제목 아이디어도 떨어져감",
    "img":"https://img.youtube.com/vi/kPRA0W1kECg/0.jpg",
    "author":"홍은진",
    "datetime":"2019-02-03T01:03:01.000Z"
}]</pre>
* /article/:no
    - GET
        + Request
            - example : /article/1
        + Response
            - content-type : application/json
            - body : 아래 참조
<pre>{
  "title":"안녕하세요? 이것은 첫번째 글입니다.",
  "videoId":"jNQXAC9IVRw",
  "authorId":"zerobell",
  "content":"<p>뭐요시발</p>",
  "datetime":"2018-12-31T15:00:01.000Z"
}
</pre>

* /comment/:no
    - GET
        + Request
            - example: /comment/1
        + Response
            - content-type: application/json
            - body : 아래 참조
<pre>{
  "1": {
    "authorId":"choerry",
    "content":"댓글 쓰기 귀찮다 진짜",
    "datetime":"2019-01-09T16:01:01.000Z"
  },
  "2": {
    "authorId":"zerobell",
    "content":"더 이상 안 쓴다 진짜",
    "datetime":"2019-03-09T16:01:01.000Z"}
}</pre>