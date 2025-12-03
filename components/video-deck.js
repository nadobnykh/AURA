import { smooth } from "../ui/animations.js";
import { applyTheme } from "../ui/theme.js";
import "./video-card.js";

export class VideoDeck extends HTMLElement {
  connectedCallback() {
    applyTheme(this, "dark");
    this.style.display = "block";
    this.style.position = "relative";
    this.style.height = "640px";

    this.intent = this.__intent;
    this.items = this.intent.items || [];
    this.index = 0;

    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .stack { width:100%; height:100%; position:relative; contain: layout style paint; }
        .card { position:absolute; width:100%; height:100%; top:0; left:0; transform: translateZ(0); will-change: transform, opacity; border-radius:18px; }
      </style>
      <div class="stack"></div>
    `;
    this.stack = this.querySelector(".stack");
    this.buildStack();
  }

  buildStack() {
    this.stack.innerHTML = "";
    const remaining = this.items.slice(this.index);
    remaining.slice(0,3).forEach((item,i)=>{
      const wrap = document.createElement("div");
      wrap.className="card";
      wrap.style.zIndex = 100-i;
      wrap.style.transform = `scale(${1-i*0.05}) translateZ(0)`;

      const card = document.createElement("video-card");
      card.data = item;
      wrap.appendChild(card);

      if(i===0) this.attachSwipe(wrap);

      this.stack.appendChild(wrap);
    });
  }

  attachSwipe(card){
    let startX=0,currentX=0;

    const down=e=>{
      startX=e.clientX;
      card.style.transition="none";
      window.addEventListener("pointermove",move);
      window.addEventListener("pointerup",up);
    };

    const move=e=>{
      currentX=e.clientX-startX;
      const rot=currentX/20;
      card.style.transform=`translate3d(${currentX}px,0,0) rotate(${rot}deg)`;
      card.style.opacity=`${1-Math.abs(currentX)/300}`;
    };

    const up=()=>{
      window.removeEventListener("pointermove",move);
      window.removeEventListener("pointerup",up);

      if(Math.abs(currentX)>120){
        const dir=currentX>0?1:-1;
        smooth.spring(card,dir*900,0,dir*30);
        setTimeout(()=>{this.index++;this.buildStack()},200);
      }else{
        smooth.spring(card,0,0,0,180);
      }
    };

    card.addEventListener("pointerdown",down);
  }
}

customElements.define("video-deck",VideoDeck);
