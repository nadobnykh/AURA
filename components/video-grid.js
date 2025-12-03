import { smooth } from "../ui/animations.js";
import { applyTheme } from "../ui/theme.js";
import "./video-card.js";

export class VideoGrid extends HTMLElement {
  connectedCallback() {
    applyTheme(this, "dark");
    this.style.display = "grid";
    this.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr))";
    this.style.gap = "12px";
    this.style.height = "640px";
    this.style.overflowY = "auto";
    this.style.padding = "10px";

    this.items = this.__intent.items || [];
    this.renderGrid();
  }

  renderGrid() {
    this.innerHTML = "";
    this.items.forEach(item => {
      const card = document.createElement("video-card");
      card.data = item;
      card.style.cursor = "pointer";
      card.addEventListener("click", () => this.expandVideo(item));
      this.appendChild(card);
    });
  }

  expandVideo(item) {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.9)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = 9999;
    overlay.style.cursor = "pointer";

    const card = document.createElement("video-card");
    card.data = item;
    card.style.width = "80%";
    card.style.height = "80%";

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });
  }
}

customElements.define("video-grid", VideoGrid);
