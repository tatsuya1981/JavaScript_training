// 監視対象が範囲内に現れたら実行する動作
const showkirin = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    tranlate: ['200px 0', 0],
  };
  entries[0].target.animate(keyframes, 600);
};

const options = {
  rootMargin: '-100px',
  threshold: [0, 0.2, 0.5, 0.8, 1],
};
// 監視ロボットに名前を付けて導入
const kirinObserver = new IntersectionObserver(showkirin, options);

// kirinを監視する様に指示
const kirin = document.querySelector('#kirin');
kirinObserver.observe(kirin);
