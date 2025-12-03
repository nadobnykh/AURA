# AURA für Menschen

## 1. Projektstruktur


AURA/
├─ index.html
├─ runtime/
├─ components/
├─ ui/
└─ docs/



## 2. Komponenten nutzen

### Video-Swipe-Deck
```html
<script id="intent" type="application/json">
{
  "component": "video-deck",
  "items": [
    { "src": "video1.mp4" },
    { "src": "video2.mp4" }
  ]
}
</script>
```

```js
import { AIRuntime } from "./runtime/engine.js";
const runtime = new AIRuntime(document.getElementById("app"));
runtime.mount(document.getElementById("intent").textContent);
```

### Video-Grid

* Scrollbare Grid-Ansicht
* Klick → Fullscreen Overlay

## 3. Styling & Theme

* Dark-Theme standardmäßig aktiv
* Anpassung über `ui/theme.js`
* Animationen via `ui/animations.js`

## 4. Tipps

* Komponenten immer per Intent JSON erzeugen
* Stack / Grid → GPU-friendly
* Swipe / Overlay → Pointer Events nutzen
