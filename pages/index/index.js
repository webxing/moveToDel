Page({
  data: {
    list: [
      { txt: 'item111111111', isTouchMove: false },
      { txt: 'item222222222', isTouchMove: false },
      { txt: 'item333333333', isTouchMove: false },
      { txt: 'item444444444', isTouchMove:false}]
  },

  onLoad: function () {
  },

  touchstart:function(e){
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY
    })
  },
  touchmove: function (e) {
    let index = e.currentTarget.dataset.index,//当前索引
      startX = this.data.startX,//开始X坐标
      startY = this.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    this.data.list.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    // //更新数据
    this.setData({
      list: this.data.list
    })
  },

  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI)
  },


  del: function (e) {
    wx.showModal({
      title: '提示',
      content: '确定要删除？',
      success: (res)=>{
        if (res.confirm) {
          let listItem = this.data.list[e.currentTarget.dataset.index]
          this.data.list.splice(e.currentTarget.dataset.index, 1)
          this.setData({ list: this.data.list })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
