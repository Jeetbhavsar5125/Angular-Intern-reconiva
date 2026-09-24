# View Encapsulation — Theory

## What is it?
In a normal HTML page, CSS is always global — any style you write affects every matching element on the page. Angular components each have their own styles, and View Encapsulation controls whether those styles stay inside the component or bleed out to the rest of the app.

---

## The 3 Modes

### 1. ViewEncapsulation.None
- Angular does zero scoping.
- Styles written in this component become **global styles** — exactly like writing them in `index.html`.
- They affect every matching element in the entire application.
- Use case: intentionally global styles like theme resets. Rarely needed.

### 2. ViewEncapsulation.Emulated ← DEFAULT
- Angular **simulates** Shadow DOM behavior without using the real browser API.
- It adds a unique attribute (e.g., `_ngcontent-abc-5`) to every element inside the component.
- It rewrites your CSS selectors to target only those attributed elements.

**What Angular does behind the scenes:**
```
You write:     h2 { color: green; }
Angular turns: h2[_ngcontent-abc-5] { color: green; }
```
- Result: styles stay inside the component and cannot leak out.
- Styles from `ViewEncapsulation.None` components CAN still override these.
- You do not need to write `encapsulation: ViewEncapsulation.Emulated` — it is the default.

### 3. ViewEncapsulation.ShadowDom
- Angular uses the **real browser-native Shadow DOM API**.
- The component is wrapped inside an actual `#shadow-root` in the browser's DOM.
- Styles are completely isolated — they never leak out, and outside styles cannot get in.
- You can see the `#shadow-root` node in browser DevTools → Elements tab.
- Use case: reusable design-system components that must be fully style-isolated.

---

## How Angular attributes look in the DOM (Emulated mode)

```html
<app-emulated-style _nghost-abc-5>
  <div _ngcontent-abc-5 class="box">
    <h2 _ngcontent-abc-5>Emulated Encapsulation</h2>
  </div>
</app-emulated-style>
```

- `_nghost` is added to the **host element** (the component tag itself).
- `_ngcontent` is added to every **child element** inside the component.

---

## Comparison Table

| Mode         | Styles leak out?          | Outside styles get in? | Mechanism                          |
|--------------|---------------------------|------------------------|------------------------------------|
| None         | YES — they become global  | YES                    | No scoping at all                  |
| Emulated     | NO                        | YES (from None)        | Angular adds `_ngcontent-xxx`      |
| ShadowDom    | NO                        | Mostly NO              | Real browser Shadow DOM API        |

---

## When styles from different modes interact

- `None` styles go into `<head>` as global styles — they can affect `Emulated` and `ShadowDom` components.
- `Emulated` styles go into `<head>` but are scoped with attributes — they only affect their own component.
- `ShadowDom` styles are injected into the shadow root only — they are invisible to the rest of the app.
- Angular also copies `None` and `Emulated` styles into any `ShadowDom` host so those components still render correctly inside shadow roots.

---

## Interview Questions You Should Be Able to Answer

**Q: What is View Encapsulation in Angular?**
A: It controls how a component's CSS styles are scoped — whether they stay inside the component or affect the whole application.

**Q: What is the default encapsulation mode?**
A: `ViewEncapsulation.Emulated`. Angular adds unique `_ngcontent` attributes to elements and rewrites CSS selectors to target only those elements.

**Q: What is the difference between Emulated and ShadowDom?**
A: Emulated is Angular's own simulation using DOM attributes. ShadowDom uses the real browser Shadow DOM API, which provides stronger and native isolation.

**Q: When would you use ViewEncapsulation.None?**
A: When you intentionally want styles to be global across the entire app — for example, a theme-resetting component. It should be used rarely.

**Q: How can you see the effect of Emulated encapsulation in DevTools?**
A: Inspect any element inside an Emulated component — you will see `_ngcontent-xxx` attributes. In the `<head>`, the injected CSS will have selectors like `h2[_ngcontent-abc-5]`.

**Q: How can you see ShadowDom in DevTools?**
A: Find the component's host element in the Elements panel — you will see a `#shadow-root (open)` node inside it.
