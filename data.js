// 组织活动数据
const organizationsData = [
  {
    id: 'five_person_dungeon',
    name: '互帮互助十二人本',
    description: '帮会成员互帮互助，齐心协力，共同拿下十二人本！',
    host: '任何帮会成员',
    time: '任何时间',
    location: '任何地点',
    image: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758104430985_qdqqd_luzig2.avif'
  },
  {
    id: 'ten_person_dungeon',
    name: '收徒DD！',
    description: '还在等什么，你未来的师傅在这里！！',
    host: '美丽',
    time: '帅气',
    location: '小椋老师',
    image: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758104434916_qdqqd_ow0atw.avif'
  }
];

// 演示视频数据
const demoVideos = [
  {
    id: '1',
    name: '帮会合照',
    video:'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758104392754_qdqqd_nm6je1.avif'
  },
  {
    id: '2',
    name: '帮会合照',
    video: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758104384226_qdqqd_zthmfh.avif'
  },
  {
    id: '3',
    name: '帮会合照',
    video: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758104388263_qdqqd_p0j49k.avif'
  },
  {
    id: '4',
    name: '帮会合照',
    video: 'https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758104377999_qdqqd_w2jqtq.avif'
  }
];


// 角色数据管理
const characterData = [
  {
    id: 'feng_yi',
    name: "寒初雪",
    title: "沐云-沐澐-养老院创始人",
    desc: "打帮战，随我冲，面板还要提提\n特么的天赏石又保底，再也不充了",
    tags: ["权威", "站街", "招人"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101390668_qdqqd_5m7gzo.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101877483_qdqqd_k5bw3a.avif"
    ]
  },
  {
    id: 'meng_jiu_shang',
    name: "俞少",
    title: "沐云第一防守指挥官",
    desc: "哈基九，进攻团还是不要你吗",
    tags: ["萌妹", "叫妈妈"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101308800_qdqqd_53le9k.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103040194_qdqqd_6l42np.avif",
    ]
  },
  {
    id: 'xiao_chen_fa_da_cai',
    name: "感情",
    title: "第一神相",
    desc: "想要找金主的可以私聊我了每天给你五个交子",
    tags: ["无敌神相"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101319557_qdqqd_u07euk.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103104066_qdqqd_f7dq08.avif",
    ]
  },
  {
    id: 'shi_liu_sui',
    name: "乐章",
    title: "摆烂大王",
    desc: "世界以痛吻我 我伸舌头",
    tags: ["甜妹", "反差"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101347858_qdqqd_bhtj8r.avif",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103190900_qdqqd_p6r3kj.avif"]
  },
  {
    id: 'xian_huan_xing',
    name: "小子",
    title: "无敌碎梦",
    desc: "极品碎梦大王",
    tags: ["无敌碎梦"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101313694_qdqqd_efep5u.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103408054_qdqqd_9haks2.avif",
    ]
  },
  {
    id: 'yu_qiang_ran',
    name: "灼星",
    title: "企图砍死铁衣",
    desc: "碎梦加强！",
    tags: ["热心肠"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101395087_qdqqd_b6suvb.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103848126_qdqqd_csp64t.avif",
  
    ]
  },
  {
    id: 'zhao_qian',
    name: "林歲",
    title: "虫吟大王",
    desc: "压力压力压力压力",
    tags: ["抽象"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101220599_qdqqd_t6vqzy.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103880423_qdqqd_4yz1um.avif",
    ]
  },
  {
    id: 'jie_qing_zhou',
    name: "与君祈愿",
    title: "叶安",
    desc: "白宝有你的新年每一年",
    tags: ["社恐"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101343667_qdqqd_jg0mf0.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103929402_qdqqd_jbdv2k.avif",
    ]
  },
  {
    id: 'xiao_chen_fa_da_cai',
    name: "澜星",
    title: "最强统战",
    desc: " 灌伤害，骗骗花，拉开距离，回回啦\n给压压，再开大，压力有点大刚雷",
    tags: ["反差", "抽象", "神经病"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101388213_qdqqd_39rk1p.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758102902326_qdqqd_nusyl5.avif",
    ]
  },
  {
    id: 'tian_ya_ke_wei_yang',
    name: "凌忘尘",
    title: "我是刷子",
    desc: "球球不要给我大保底",
    tags: ["12偷吃"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101367110_qdqqd_yjyqur.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103057116_qdqqd_p9soz0.avif",
    ]
  },
  {
    id: 'kong_luo_lai',
    name: "垚花",
    title: "不垚壁脸",
    desc: "我说白了老弟这你不进沐云/澐？",
    tags: ["招人这一块"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101337563_qdqqd_ikmuix.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103125628_qdqqd_mxnmwz.avif",
    ]
  },
  {
    id: 'guan_xin_jing',
    name: "荒羽",
    title: "血河人气次席",
    desc: "你去毛伤害是想等我对你怒吼吗",
    tags: ["种地菜农"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101393199_qdqqd_0aq6x4.avif",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103229425_qdqqd_q59tau.avif"]
  },
  {
    id: 'yu_ban_sheng',
    name: "初遇",
    title: "药王谷权威御姐",
    desc: "以蛊为药，魂灯为引，  九灵有情人终成药人",
    tags: ["温柔", "认真"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101399972_qdqqd_3fihn0.avif",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103428291_qdqqd_xqj2q3.avif"]
  },
  {
    id: 'zhen_jin_mian',
    name: "军人",
    title: "吉祥物",
    desc: "李少大帅哥",
    tags: ["李少牛逼"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101350416_qdqqd_mi0blg.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103860451_qdqqd_k88ay7.avif",
     
    ]
  },
  {
    id: 'qi_yan_yu_feng',
    name: "娇弱叔父",
    title: "叶山",
    desc: "烛白宝有你每一年新年",
    tags: ["抽象", "反差", "表面社恐"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101367110_qdqqd_yjyqur.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103910206_qdqqd_kwvi2n.avif",
    ]
  },
  {
    id: 'lin_qian_qu',
    name: "云欢",
    title: "沐云堂众",
    desc: "联赛重伤断层我就断触卡键 手抖 误触 帧率低 高延迟 瓶颈期 没手感 没心态 没状态 没支架 腱鞘炎犯了",
    tags: ["抽象", "应声虫", "站街"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101399972_qdqqd_3fihn0.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103937351_qdqqd_ks232g.avif",
    ]
  },
  {
    id: 'jian_zhao_yue_ming',
    name: "风椋",
    title: "顶级辅助",
    desc: "如雾气弥漫，留下模糊的足迹，又悄然散去。",
    tags: ["帅气","美丽","小椋老师"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101357410_qdqqd_0a73rp.avif",
    art: [
      
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758102998261_qdqqd_hqis54.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758102994596_qdqqd_661a0q.avif",
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103000819_qdqqd_65x0oi.avif",
    ]
  },
  {
    id: 'wen_ren_yi',
    name: "软妹",
    title: "沐云最强数据官",
    desc: "沐云棒棒的！",
    tags: ["品味好", "萌萌哒"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101397596_qdqqd_6bmstb.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103080453_qdqqd_fr74fh.avif",
    ]
  },
  {
    id: 'ye_yun_qing',
    name: "腼腆的妻子",
    title: "蘸豆",
    desc: "蘸豆蘸豆蘸豆蘸豆蘸豆蘸豆蘸豆蘸豆蘸豆蘸豆蘸豆蘸豆蘸豆打死所有人",
    tags: ["蘸豆","小皇帝"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101341872_qdqqd_di6m1r.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103163911_qdqqd_3kine1.avif",

    ]
  },
  {
    id: 'yue_luo_xiu_chen',
    name: "讨厌低端玩物",
    title: "虹桥百星王者",
    desc: "来玩自定义呀",
    tags: ["睡觉", "可爱", "衣品好"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101345637_qdqqd_3xqfys.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103271899_qdqqd_ocaf8b.avif",
    ]
  },
  {
    id: 'zhi_bei_bei_bei',
    name: "闲敲雪",
    title: "金戈铁马定仙原",
    desc: "白发疏疏映晓光，衣香鬓影立西厢。",
    tags: ["白发帅哥", "氛围感", "光影", "精致穿搭"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101352240_qdqqd_6o99wq.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103443648_qdqqd_ssqwpv.avif",
     
    ]
  },
  {
    id: 'ming_wu_qi',
    name: "小清秋",
    title: "一只碎梦",
    desc: "爱江江",
    tags: ["高玩"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101359379_qdqqd_162ozt.avif",
    art: ["https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103866325_qdqqd_ma6zg4.avif"]
  },
  {
    id: 'feng_yi',
    name: "深渊",
    title: "全能人机",
    desc: "为人仁厚，重情重义。",
    tags: ["御姐", "大王"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101298872_qdqqd_mw9rzo.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103918570_qdqqd_2xk8v6.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "百穿",
    title: "国服梦泪",
    desc: " ⁶⁶⁶⁶⁶⁶ ⁶⁶ ₆₆₆₆真的太帅了吧₆₆₆₆⁶⁶⁶⁶⁶⁶⁶ ⁶⁶ ₆₆₆₆帅晕我了 ₆₆₆₆⁶6666 ⁶⁶⁶⁶⁶⁶ ⁶⁶ ₆₆₆₆666真的太帅了吧₆₆₆₆⁶太帅了⁶⁶⁶⁶⁶⁶ ⁶⁶ ₆₆₆₆₆₆₆₆⁶",
    tags: ["装货", "神", "压力"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101402468_qdqqd_pv1d0z.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758103961415_qdqqd_iw7ga2.avif",
    ]
  },
  //第二页！！！！
  {
    id: 'feng_yi',
    name: "越晨夕",
    title: "超绝男神",
    desc: "沐云招人！",
    tags: ["糕手", "高冷"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101335430_qdqqd_i18d42.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758104141711_qdqqd_7ly6ah.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "心累",
    title: "副本开荒指挥",
    desc: "当0当1不如当3来的刺激",
    tags: ["cpdd", "打本中"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101304012_qdqqd_6prdet.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758104165691_qdqqd_6g4s8f.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "5",
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
    name: "加多宝",
    title: "大帅比",
    desc: "尔若不离，我则不弃。",
    tags: ["帅气", "甜菜"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101350416_qdqqd_mi0blg.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758104154195_qdqqd_hryniq.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "兔子",
    title: "极品奶龙",
    desc: "我以为尿得够高 就能够遮住眼泪",
    tags: ["猎奇", "少御"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101308800_qdqqd_53le9k.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758104172153_qdqqd_psardu.avif",
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
  },{
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
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101152432_qdqqd_5bu72d.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758104158458_qdqqd_snrbur.avif",
    ]
  },
  {
    id: 'feng_yi',
    name: "屿鹿",
    title: "追进度的小仙女",
    desc: "你权衡利弊 考虑所有 唯独不考虑我",
    tags: ["好声音","沐云招人"],
    avatar: "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758101175195_qdqqd_obnezn.avif",
    art: [
      "https://s3plus.meituan.net/opapisdk/op_ticket_885190757_1758104177436_qdqqd_mnwnoi.avif",
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
  },{
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