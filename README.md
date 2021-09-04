## h5 下拉刷新 refresh indication

[主页]https://github.com/teo3707/refresn-indicator.git
```javascript
// html
`
<html>
<body>
<div>
  <div id='refreshIndicator'>
  <div style="background: aqua; height: 20vh;"></div>
  <div style="background: red; height: 20vh;"></div>
  <div style="background: yellow; height: 20vh;"></div>
  <div style="background: blue; height: 20vh;"></div>
  <div style="background: green; height: 20vh;"></div>
  <div style="background: palegoldenrod; height: 20vh;"></div>
  <div style="background: lime; height: 20vh;"></div>
</div>
</html>
`
import RefreshIndicator from 'refresh-indicator';

const dom = document.getElementById('refreshIndicator');
new RefreshIndicator(dom, {
  // default '30px', 指示器的大小
  size: '30px',
  // defalut 'green', 指示器的颜色
  color: 'green',
  // default 'white', 指示器的背景色
  bgColor: 'white',
  // 刷新时的回调, 返回promise
  onRefresh: () => new Promise(resolve => setTimeout(resolve, 3000)),
  // default 2, 指示器下拉距离的最大值(size * distanceFactor),
  distanceFactor: 2,
  // default 1.2, 指示器刷新时的位置(size * refreshDistanceFactor),
  refreshDistanceFactor: 1.2, 
});

```

# demo
参照 src/app.js + index.html
![示例图片](https://teo3707.github.io/static/refresh-indicator-demo.jpg)

### 请作者喝一杯☕️
![微信](https://teo3707.github.io/static/w.jpg)
![支付宝](https://teo3707.github.io/static/z.jpg)
