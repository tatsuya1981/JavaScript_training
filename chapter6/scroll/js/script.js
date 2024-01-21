// 監視対象が範囲内に現れたら実行する動作
const showkirin = () => {
  console.log('キリンさんです');
};

// 監視ロボットに名前を付けて導入
const kirinObserver = new IntersectionObserver(showkirin);

// kirinを監視する様に指示
const kirin = document.querySelector('#kirin');
kirinObserver.observe(kirin);
