# moveToDel
滑动删除列表项

# 效果图
![滑动效果+删除](https://upload-images.jianshu.io/upload_images/10518780-9b0aeb5ec145ee18.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 思路
 -  每个列表项绑定`touchstart`和`touchmove`事件，监听滑动手势，确定滑动角度，判断滑动是否有效
 -  列表数据源每一项包含标志值`isTouchMove`，用来确定此项是否滑动成功
 -  列表项有两个类，根据`isTouchMove`的值来确定渲染那个类
 -  删除时直接操作数据源
