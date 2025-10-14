// 组织活动数据
const organizationsData = [
  {
    id: 'five_person_dungeon',
    name: '收徒DD！',
    description: '还在等什么，你未来的师傅在这里！！',
    host: '美丽',
    time: '帅气',
    location: '小椋老师',
    image: 'img/日常/fengliang1.avif'
  },
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
    id: 'yu_qiang_ran',
    name: "灼星",
    title: "企图砍死铁衣",
    desc: "碎梦加强！",
    tags: ["热心肠"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/46.jpg",
    art: [
      "img/第一页/zuoxing.avif",

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
    title: "沐云最强数据官",
    desc: "沐云棒棒的！",
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
    id: 'jian_zhao_yue_ming',
    name: "风椋",
    title: "顶级辅助",
    desc: "如雾气弥漫，留下模糊的足迹，又悄然散去。",
    tags: ["帅气", "美丽", "小椋老师"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/37.jpg",
    art: [

      "img/第一页/fengliang2.avif",
      "img/第一页/fengliang1.avif",
      "img/第一页/fengliang3.avif"
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
    id: 'yue_luo_xiu_chen',
    name: "越晨夕",
    title: "超绝男神",
    desc: "沐云招人！",
    tags: ["糕手", "高冷"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/27.jpg",
    art: [
      "img/第一页/xi.avif",
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
    id: 'ming_wu_qi',
    name: "小清秋",
    title: "一只碎梦",
    desc: "爱江江",
    tags: ["高玩"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/38.jpg",
    art: ["第一页/qingque.avif"]
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
  //第二页！！！！
  {
    id: 'feng_yi',
    name: "银盏别梦",
    title: "全职小白",
    desc: "悠闲的碧血营王子",
    tags: ["好脾气", "爱搓桩"],
    avatar: "https://cdn.jsdelivr.net/gh/4notfl3/muyunimg@main/avatars/36.jpg",
    art: [
      "img/第二页/biemeng.avif",
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
    name: "6",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "7",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "8",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "9",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "10",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "26",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "27",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
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
    id: 'feng_yi',
    name: "12",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "13",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "14",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  }, {
    id: 'feng_yi',
    name: "15",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "16",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "17",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "18",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
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
    name: "20",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "21",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "22",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  }, {
    id: 'feng_yi',
    name: "23",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "24",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "25",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  {
    id: 'feng_yi',
    name: "26",
    title: "社长",
    desc: "为人仁厚，重情重义。",
    tags: ["虹虹玩家", "紫色韵味", "开服玩家"],
    avatar: "https://gitee.com/tx-feng/FengHuaWuQue/raw/Vue/Static/player/avatar/avatar11.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398092558_qdqqd_fqwyyr.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398094217_qdqqd_yumaub.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398127831_qdqqd_guf314.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1757398131295_qdqqd_6qamva.avif"
    ]
  },
  


]

// 工具函数
function getOrganizationById(id) {
  return organizationsData.find(org => org.id === id);
}

function getCharacterById(id) {
  return characterData.find(char => char.id === id);
}