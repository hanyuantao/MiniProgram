// me.js
var initData = 'this is first line\nthis is second line'
var extraLine = [];
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    title:'Person',
    id:100,
    show:true,
    a:1,
    b:2,
    c:3,
    zero:0,
    teamScore: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ], 
    numberArray: [1, 2, 3, 4],
    iconSize:[20,30,40,50,60,70],
    iconType:['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    text:initData,
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    checkItems:[
      { name: "USA", value: "美国" },
      { name: "CHN", value: "中国" },
      { name: "BRA", value: "巴西" },
      { name: "JPN", value: " 日本" },
    ],
    multyItems: [['美国', '中国', '巴西', '日本'],["洛杉矶","北京","圣保罗","东京"]],
    index: 0,
    multiIndex: [0, 0],
    date: '2016-09-01',
    region: ['广东省', '广州市', '海珠区'],
    
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    year: date.getFullYear(),
    value: [9999, 1, 1]
  },

  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFrant: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  add:function(e){
    extraLine.push("Another line");
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove: function (e) {
    if(extraLine.length>0){
      extraLine.pop("Another line");
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
        })
      }
  },
  getUserinfo:function(e){
    console.log(e.detail.rawData)
  },
  getphoneNO:function(e) {
    console.log(e);
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  formSubmit:function(e){
    console.log('form发生了submit事件，携带数据为：' + e.detail.value);
    console.table(e)
  },
  formReset: function () {
    console.log('form发生了Reset事件，携带数据为：');
  },
  handleInput:function(e){
    return "this is a text"
  },
  
  // pickerDelegate

  changePickerData:function(e){
    console.log(e);
    this.setData({
      index:e.detail.value
    })
  },
  bindMultiPickerChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    this.setData({
      multiIndex: [e.detail.value, e.detail.value]
    })
  },
  bindDateChange:function(e){
    this.setData({
      date: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindPickerViewChange: function(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  }

})