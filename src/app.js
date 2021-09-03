import RefreshIndicator from './index';

function render() {
  const indicator = document.getElementById('refresh-indicator');
  new RefreshIndicator(indicator, {
    onRefresh: function() {
      return new Promise(resolve => {
        setTimeout(resolve, 4000);
      });
    }
  });
}

render();
