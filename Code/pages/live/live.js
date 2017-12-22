//index.js
var team = require('team.js');

Page({
    data: {
        text: 'init data',
        name: '积分榜',
        teamList: [{team: '浙江广厦', rank: 1 }, {team: '山东高速', rank: 2 }, {team: '新疆广汇', rank: 3 }],
        teamA: { team: '浙江广厦', rank: 1},
        teamB: { team: '山东高速', rank: 2 },
        teamC: { team: ' 新疆广汇', rank: 3 },
    },

    changeNameTap:function(){
      this.setData({
        name: team.printRankList("巴塞罗那"),
      })
    }
})