export class VideoCard extends HTMLElement {
  connectedCallback() {
    const d = this.__data;
    this.innerHTML = `
      <style>
        :host { display:block; width:100%; height:100%; }
        video { width:100%; height:100%; object-fit:cover; border-radius:18px; }
      </style>
      <video playsinline muted src="${d.src}"></video>
    `;
    this.querySelector("video").play().catch(()=>{});
  }

  set data(v) { this.__data = v; }
}

customElements.define("video-card", VideoCard);
