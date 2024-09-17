document.addEventListener("DOMContentLoaded", () => {
    const scene = document.querySelector('.scene');
    const fragment = document.createDocumentFragment();
    const sides = ['right', 'left', 'top', 'bottom', 'back'];
    for (let i = 0; i < 2; i++) {
      const wrap = document.createElement('div');
      wrap.className = 'wrap';
  
      sides.forEach(side => {
        const wall = document.createElement('div');
        wall.className = `wall wall-${side}`;
        wrap.appendChild(wall);
      });
  
      fragment.appendChild(wrap);
    }
    scene.appendChild(fragment);
});
