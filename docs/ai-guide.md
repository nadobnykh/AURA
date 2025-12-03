# AURA für KIs

## 1. Intent Schema
```json
{
  "component": "<ComponentName>",
  "items": [
    { "src": "<VideoURL>" },
    ...
  ]
}
```

## 2. Komponenten Lifecycle

* `connectedCallback()` → initial render
* `__intent` → JSON-Input
* `__events` → EventBus für Interaktionen
* GPU-Optimierung: `translateZ(0)`, `will-change: transform`

## 3. Patterns

* **Swipe-Deck:** höchstes zIndex = top card
* **Grid:** auto-fill columns, overlay fullscreen
* **Animations:** spring, rotate, translate

## 4. Erweiterung

* KI kann JSON-Intents direkt erzeugen
* Neue Komponenten → nur HTMLElement + `customElements.define`
* KI kann mehrere Komponenten kombinieren, Layouts verschachteln
