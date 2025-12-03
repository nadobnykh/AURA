import { parseIntent } from "./parser.js";
import { EventBus } from "./eventbus.js";

export class AIRuntime {
  constructor(root) {
    this.root = root;
    this.eventBus = new EventBus();
  }

  mount(intentJSON) {
    const intent = parseIntent(intentJSON);
    this.loadComponent(intent);
  }

  loadComponent(intent) {
    if (!intent.component) {
      this.root.innerHTML = `<div style="color:red">No component in intent</div>`;
      return;
    }

    const el = document.createElement(intent.component);
    el.__intent = intent;
    el.__events = this.eventBus;

    this.root.innerHTML = "";
    this.root.appendChild(el);
  }
}
