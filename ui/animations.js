export const smooth = {
  spring(el, x, y, rot, duration = 220) {
    el.style.transition = `transform ${duration}ms cubic-bezier(.22,1.2,.32,1)`;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg)`;
  }
};
