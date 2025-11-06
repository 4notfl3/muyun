// 组织活动数据
const organizationsData = [
 
  {
    id: 'ten_person_dungeon',
    name: '收徒滴滴！',
    description: '你养我小/我不养你老',
    host: '',
    time: '',
    location: '',
    image: 'img/日常/tudi.avif'
  }
];

// 演示视频数据
const demoVideos = [
  {
    id: '1',
    name: '帮会合照',
    video: 'img/合照/hezhao2.avif'
  },
  {
    id: '2',
    name: '帮会合照',
    video: 'img/合照/hezhao4.avif'
  },
  {
    id: '3',
    name: '帮会合照',
    video: 'img/合照/hezhao1.avif'
  },
  {
    id: '4',
    name: '帮会合照',
    video: 'img/合照/hezhao3.avif'
  }
];


// 角色数据管理
const characterData = [
  {
    id: 'feng_yi',
    name: "澜星",
    title: "最强统战",
    desc: " 灌伤害，骗骗花，拉开距离，回回啦\n给压压，再开大，压力有点大刚雷",
    tags: ["反差", "抽象", "神经病"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/43.jpg",
    art: [
      "img/第一页/lanxing3.avif",
      "img/第一页/lanxing.avif",
    ]
  },
  {
    id: 'tian_ya_ke_wei_yang',
    name: "凌忘尘",
    title: "我是刷子",
    desc: "球球不要给我大保底",
    tags: ["12偷吃"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/40.jpg",
    art: [
      "img/第一页/lingwang.avif",
    ]
  },
  {
    id: 'xiao_chen_fa_da_cai',
    name: "垚花",
    title: "不垚壁脸",
    desc: "我说白了老弟这你不进沐云/澐？",
    tags: ["招人这一块"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/28.jpg",
    art: [
      "img/第一页/hua.avif",
    ]
  },
  {
    id: 'shi_liu_sui',
    name: "深渊",
    title: "全能人机",
    desc: "为人仁厚，重情重义。",
    tags: ["御姐", "大王"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/18.jpg",
    art: [
      "img/第一页/shenyuan.avif",
    ]
  },
  {
    id: 'xian_huan_xing',
    name: "小子",
    title: "无敌碎梦",
    desc: "极品碎梦大王",
    tags: ["无敌碎梦"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/24.jpg",
    art: [
      "img/第一页/xiaozi.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "加多宝",
    title: "大帅比",
    desc: "尔若不离，我则不弃。",
    tags: ["帅气", "甜菜"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/34.jpg",
    art: [
      "img/第二页/jiaduobao.avif",
    ]
  },
  {
    id: 'zhao_qian',
    name: "林歲",
    title: "虫吟大王",
    desc: "压力压力压力压力",
    tags: ["抽象"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/11.jpg",
    art: [
      "img/第一页/ling.avif",
    ]
  },
  {
    id: 'jie_qing_zhou',
    name: "与君祈愿",
    title: "叶安",
    desc: "白宝有你的新年每一年",
    tags: ["社恐"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/31.jpg",
    art: [
      "img/第一页/yujung.avif",
    ]
  },
  {
    id: 'xiao_chen_fa_da_cai',
    id: 'meng_jiu_shang',
    name: "俞少",
    title: "沐云第一防守指挥官",
    desc: "哈基九，进攻团还是不要你吗",
    tags: ["萌妹", "叫妈妈"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/50.jpg",
    art: [
      "img/第一页/yusao.avif",
    ]
  },
  {
    id: 'tian_ya_ke_wei_yang',
    name: "软妹",
    title: "将夜最强数据官",
    desc: "将夜棒棒的！",
    tags: ["品味好", "萌萌哒"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/47.jpg",
    art: [
      "img/第一页/ruanmei.avif",
    ]
  },
  {
    id: 'kong_luo_lai',
    name: "乐章",
    title: "摆烂大王",
    desc: "世界以痛吻我 我伸舌头",
    tags: ["甜妹", "反差"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/33.jpg",
    art: ["img/第一页/yuezhang.avif"]
  },
  {
    id: 'guan_xin_jing',
    name: "荒羽",
    title: "血河人气次席",
    desc: "你去毛伤害是想等我对你怒吼吗",
    tags: ["种地菜农"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/45.jpg",
    art: ["img/第一页/huangyu.avif"]
  },
  {
    id: 'yu_ban_sheng',
    name: "小苓",
    title: "称号奶茶续命官",
    desc: "要及时清醒，也要事事如意",
    tags: ["沐澐招人"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/27.jpg",
    art: [
      "img/第一页/xiaoling.avif",
    ]
  },
  {
    id: 'zhen_jin_mian',
    name: "军人",
    title: "吉祥物",
    desc: "李少大帅哥",
    tags: ["李少牛逼"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/34.jpg",
    art: [
      "img/第一页/lishao.avif",

    ]
  },
  {
    id: 'qi_yan_yu_feng',
    name: "娇弱叔父",
    title: "叶山",
    desc: "烛白宝有你每一年新年",
    tags: ["抽象", "反差", "表面社恐"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/40.jpg",
    art: [
      "img/第一页/jiaoruo.avif",
    ]
  },
  {
    id: 'lin_qian_qu',
    name: "云欢",
    title: "沐云堂众",
    desc: "联赛重伤断层我就断触卡键 手抖 误触 帧率低 高延迟 瓶颈期 没手感 没心态 没状态 没支架 腱鞘炎犯了",
    tags: ["抽象", "应声虫", "站街"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/48.jpg",
    art: [
      "img/第一页/yun.avif",
    ]
  },
  {
    id: 'wen_ren_yi',
    name: "感情",
    title: "第一神相",
    desc: "想要找金主的可以私聊我了每天给你五个交子",
    tags: ["无敌神相"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/26.jpg",
    art: [
      "img/第一页/ganq.avif",
    ]
  },
  {
    id: 'zhi_bei_bei_bei',
    name: "闲敲雪",
    title: "金戈铁马定仙原",
    desc: "白发疏疏映晓光，衣香鬓影立西厢。",
    tags: ["白发帅哥", "氛围感", "光影", "精致穿搭"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/35.jpg",
    art: [
      "img/第一页/xianxue.avif",

    ]
  },
  {
    id: 'feng_yi',
    name: "百穿",
    title: "国服梦泪",
    desc: " ⁶⁶⁶⁶⁶⁶ ⁶⁶ ₆₆₆₆真的太帅了吧₆₆₆₆⁶⁶⁶⁶⁶⁶⁶ ⁶⁶ ₆₆₆₆帅晕我了 ₆₆₆₆⁶6666 ⁶⁶⁶⁶⁶⁶ ⁶⁶ ₆₆₆₆666真的太帅了吧₆₆₆₆⁶太帅了⁶⁶⁶⁶⁶⁶ ⁶⁶ ₆₆₆₆₆₆₆₆⁶",
    tags: ["装货", "神", "压力"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/49.jpg",
    art: [
      "img/第一页/baichuan.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "孤鸿",
    title: "高冷男神",
    desc: "阿玛特拉斯～～～",
    tags: ["高冷", "炫酷"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/3.jpg",
    art: [
      "img/第二页/guhong.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "心累",
    title: "副本开荒指挥",
    desc: "当0当1不如当3来的刺激",
    tags: ["cpdd", "打本中"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/20.jpg",
    art: [
      "img/第二页/xinlei.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "鹿漓",
    title: "追进度的小仙女",
    desc: "你权衡利弊 考虑所有 唯独不考虑我",
    tags: ["好声音", "沐云招人"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/6.jpg",
    art: [
      "img/第二页/lu.avif",
    ]
  },
  
  {
    id: 'feng_yi',
    name: "砚止",
    title: "安安",
    desc: "开心最重要",
    tags: ["爆金币"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/10.jpg",
    art: [
      "img/第一页/研止.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "离倾",
    title: "宁静",
    desc: "你已经触犯了大清法律中 不可饶恕之目无君主之罪 我康熙铠甲宣布剥夺你的一切权利 并对你的九族进行午后问斩 束手就擒吧",
    tags: ["甜妹","副本大师"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/30.jpg",
    art: [
      "img/第二页/离倾.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "卜知奇意",
    title: "医心济世",
    desc: "医人医骨不医心，知人知面不知心",
    tags: ["元气满满","一口奶满"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/19.jpg",
    art: [
      "img/第二页/卜知奇意.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "雨夜",
    title: "纯粹自由之身",
    desc: "于世间再无枷锁",
    tags: ["雨夜大王"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/40.jpg",
    art: [
      "img/第二页/雨夜.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "嫣凤",
    title: "铁衣大帝",
    desc: "前途一片阴暗 好凉快",
    tags: ["完美主义爱好者","美食爱好者"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/33.jpg",
    art: [
      "img/第二页/嫣凤.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "将夜",
    title: "合照",
    desc: "帮会成员免费投稿",
    tags: ["欢迎新人"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/50.jpg",
    art: [
      "img/合照/hezhao2.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "将夜",
    title: "合照",
    desc: "帮会成员免费投稿",
    tags: ["欢迎新人"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/50.jpg",
    art: [
      "img/合照/hezhao2.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "将夜",
    title: "合照",
    desc: "帮会成员免费投稿",
    tags: ["欢迎新人"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/50.jpg",
    art: [
      "img/合照/hezhao2.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "将夜",
    title: "合照",
    desc: "帮会成员免费投稿",
    tags: ["欢迎新人"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/50.jpg",
    art: [
      "img/合照/hezhao2.avif",
    ]
  },
   {
    id: 'feng_yi',
    name: "将夜",
    title: "合照",
    desc: "帮会成员免费投稿",
    tags: ["欢迎新人"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/50.jpg",
    art: [
      "img/合照/hezhao2.avif",
    ]
  },
  
  //模板
  // {
  //   id: 'feng_yi',
  //   name: "将夜",
  //   title: "合照",
  //   desc: "帮会成员免费投稿",
  //   tags: ["欢迎新人"],
  //   avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/50.jpg",
  //   art: [
  //     "img/合照/hezhao2.avif",
  //   ]
  // },
 
 
  


]

// 工具函数
function getOrganizationById(id) {
  return organizationsData.find(org => org.id === id);
}

function getCharacterById(id) {
  return characterData.find(char => char.id === id);
}
