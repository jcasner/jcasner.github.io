// copied from https://gist.github.com/jdbruxelles/b23fde62c9f26a583b0c2ea4a1d65f5a
// and then updated to use the airbnb linting rules

const metas = document.getElementsByTagName('meta');
let i;

const gestureStart = () => {
  for (i = 0; i < metas.length; i += 1) {
    if (metas[i].name === 'viewport') {
      metas[i].content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
    }
  }
};

if (navigator.userAgent.match(/iPhone/i)) {
  for (i = 0; i < metas.length; i += 1) {
    if (metas[i].name === 'viewport') {
      metas[i].content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
    }
  }
  document.addEventListener('gesturestart', gestureStart, false);
}
