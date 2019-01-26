const ap = new APlayer({
    container: document.getElementById('aplayer'),

    // 自动播放
    autoplay: true,
    // 启用迷你模式
    //mini: true,

    // 吸底
    fixed: false,

    // 列表折叠
    listFolded: true,

    // 列表最大高度
    listMaxHeight: 2,
    // 默认主题色
    theme: '#262b30',

    // 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    //mutex: true,
    audio: [
      {
        name: "椿",
        artist: '沈以诚',
        url: 'http://www.ytmp3.cn/down/49816.mp3',
        cover: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=45e2019efb03918fc3dc359830544df2/b58f8c5494eef01f1cec4ebbecfe9925bd317dd7.jpg',
      },
      {
        name: '过客',
        artist: '阿涵',
        url: 'http://www.ytmp3.cn/down/46389.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: 'I just wanna run',
        artist: 'Let\'s Be Animals',
        url: 'http://www.ytmp3.cn/down/56544.mp3',
        cover: 'http://5b0988e595225.cdn.sohucs.com/images/20171125/b5b1b58efc944ac3aacb7029dcf6e5ab.jpg',
      }
    ]
});