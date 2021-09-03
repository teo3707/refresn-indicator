(function() {
  const style = document.createElement('style');
  style.innerHTML = `
  .refresh-indicator-animation {
      animation: refresh-indicator-rotate 1s infinite linear;
      -webkit-animation: refresh-indicator-rotate 1s infinite linear;
      -moz-animation: refresh-indicator-rotate 1s infinite linear;
      -o-animation: refresh-indicator-rotate 1s infinite linear;
  }
  
  @keyframes refresh-indicator-rotate {
    from {
      transform: rotate(0);
      -webkit-transform: rotate(0);
      -moz-transform: rotate(0);
      -o-transform: rotate(0);
    }
    
    to {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
    }
  }
  `;
  document.body.appendChild(style);
}());

export default class RefreshIndicator {
  constructor(dom, option = {}) {
    this.dom = dom;
    this.defaultOption = {
      size: '30px',
      color: 'green',
      bgColor: 'white',
      distanceFactor: 2,
      refreshDistanceFactor: 1.2,
      onRefresh: () => new Promise(resolve => setTimeout(resolve, 3000)),
    }
    this.option = Object.assign({}, this.defaultOption, option || {});
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.times = 0;
    this.init();
  }

  async canScroll(node) {
    if (!node) {
      return false;
    }
    const oldScrollTop = node.scrollTop || 0;
    node.scrollTop = oldScrollTop + 1;
    return new Promise(resolve => {
      setTimeout(() => {
        const newScrollTop = node.scrollTop;
        node.scrollTop = oldScrollTop;
        resolve(newScrollTop !== oldScrollTop);
      }, 0);
    });
  }



  async init() {
    let root = this.dom.parentNode;
    Object.assign(this.dom.style, {
      position: 'absolute',
      zIndex: 0,
      top: 0,
      left: 0,
      right: 0,
      transform: 'translate(0, -100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    });

    this.refreshDom = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.refreshDom.setAttribute('viewBox', '0 0 1024 1024');
    this.refreshDom.setAttribute('width', this.option.size);
    this.refreshDom.setAttribute('height', this.option.size);
    Object.assign(this.refreshDom.style, {
      background: this.option.bgColor,
      borderRadius: '50%',
    });
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M866.133333 573.013333a42.666667 42.666667 0 0 0-53.333333 27.733334A304.64 304.64 0 0 1 519.68 810.666667 302.933333 302.933333 0 0 1 213.333333 512a302.933333 302.933333 0 0 1 306.346667-298.666667 309.76 309.76 0 0 1 198.4 71.253334l-92.586667-15.36a42.666667 42.666667 0 0 0-49.066666 35.413333 42.666667 42.666667 0 0 0 35.413333 49.066667l180.906667 29.866666h7.253333a42.666667 42.666667 0 0 0 14.506667-2.56 14.08 14.08 0 0 0 4.266666-2.56 33.28 33.28 0 0 0 8.533334-4.693333l3.84-4.693333c0-2.133333 3.84-3.84 5.546666-6.4s0-4.266667 2.133334-5.973334a57.173333 57.173333 0 0 0 2.986666-7.68l32-170.666666a42.666667 42.666667 0 0 0-85.333333-16.213334l-11.52 61.866667A392.96 392.96 0 0 0 519.68 128 388.266667 388.266667 0 0 0 128 512a388.266667 388.266667 0 0 0 391.68 384A389.12 389.12 0 0 0 896 626.346667a42.666667 42.666667 0 0 0-29.866667-53.333334z');
    path.setAttribute('fill', this.option.color);
    this.refreshDom.appendChild(path);
    this.dom.appendChild(this.refreshDom);

    while (root) {

      if (await this.canScroll(root)) {
        break
      }
      root = root.parentNode;
    }
    if (root === document) {
      root = document.documentElement;
    }

    if (!root) {
      root = document.documentElement;
    }
    this.root = root;
    root.addEventListener('touchstart', this.onTouchStart, false);
    root.addEventListener('touchmove', this.onTouchMove, false);
    root.addEventListener('touchend', this.onTouchEnd);

    Object.assign(this.root.style, {
      position: 'relative',
    });

  }

  async onTouchEnd() {
    if (this.$$isRefresing) {
      return;
    }

    if (this.refreshDom.scrollTop <= 5) {
      this.times++;
    }
    this.$$priviousY = undefined;

    if (this.dom.offsetTop > this.$$size / 2 * 3) { // handle refresh
      this.$$isRefresing = true;
      this.dom.style.top = this.$$size * this.option.refreshDistanceFactor + 'px';
      try {
        this.refreshDom.classList.add('refresh-indicator-animation');
        await this.option.onRefresh();
      } catch (e) {
        console.error('onRefresh error:', e)
      }
      this.$$isRefresing = false;
    }
    this.dom.style.top = '0';
    this.refreshDom.classList.remove('refresh-indicator-animation');
  }

  onTouchStart(event) {

  }

  onTouchMove(event) {
    if (this.$$isRefresing) {
      return;
    }

    if (!(this.times % 2)) {
      return
    }

    const y = event.touches[0].clientY;
    if (this.$$priviousY === undefined) {
      this.$$priviousY = y;
      return;
    }

    const offset = y - this.$$priviousY;
    this.$$priviousY = y;
    let top = parseFloat(this.dom.style.top) + offset;
    this.$$size = this.$$size || (this.refreshDom.getBoundingClientRect().height);
    const maxHeight = this.$$size * this.option.distanceFactor;
    if (top > maxHeight) {
      top = maxHeight;
    }
    this.dom.style.top = top + offset + 'px';
  }

  destroy() {
    this.root.removeEventListener('touchstart', this.onTouchStart);
    this.root.removeEventListener('touchmove', this.onTouchMove);
    this.root.removeEventListener('touchend', this.onTouchEnd);
  }

}
