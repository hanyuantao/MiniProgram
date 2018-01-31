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
      { name: "JPN", value: "日本" },
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
    value: [9999, 1, 1],
    imageArray: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, {
      mode: 'aspectFill',
      text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
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
  },

  changeRadio:function(e){
    console.log('radio发生change事件，携带value值为：', e.detail)
  },
  
  sliderChange:function(e) {
    console.log('Slider发生change事件，携带value值为：', e.detail)
  },




})