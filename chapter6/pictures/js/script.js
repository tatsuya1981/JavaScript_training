const items = document.querySelectorAll('.img-item');

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    filter: ['blur(20px)', 'blur(0)']
  };
  const options = {
    duration: 600,
    fill: 'forwards',
    delay: i * 300,
  };
  items[i].animate(keyframes, options);
}