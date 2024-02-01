// 監視対象が範囲内に現れたら実行する動作
const showkirin = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    tranlate: ['200px 0', 0],
  };
  entries[0].target.animate(keyframes, 600);
};

// 監視ロボットに名前を付けて導入
const kirinObserver = new IntersectionObserver(showkirin);

// kirinを監視する様に指示
const kirin = document.querySelector('#kirin');
kirinObserver.observe(kirin);
