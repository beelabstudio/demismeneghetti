# Spec-Driven Development: QA-First in the Age of AI

Presentation slides for the BrowserStack Meetup 2025 talk.

## Quick Start

### Open in browser (recommended)

```bash
# Option A — VS Code Live Server extension (zero config)
# Right-click index.html → "Open with Live Server"

# Option B — Python (no install needed on macOS)
python3 -m http.server 8080
# then open http://localhost:8080

# Option C — Node.js
npx serve .
# then open http://localhost:3000
```

> **Do not** open `index.html` directly from the filesystem (`file://`).  
> The QR code on the last slide uses the page URL — a local server gives a real URL.

---

## Navigation

| Action | Control |
|---|---|
| Next slide | `→` `↓` `Space` or **Next** button |
| Previous slide | `←` `↑` or **Prev** button |
| Jump to slide N (1-9) | Press number key |
| First slide | `Home` |
| Last slide | `End` |
| Mobile | Swipe left / right |

---

## File Structure

```
.
├── index.html          ← all 20 slides (semantic HTML)
├── css/
│   └── styles.css      ← all styling & responsive rules
├── js/
│   └── app.js          ← navigation, keyboard, QR code
├── assets/
│   └── .gitkeep        ← drop any images here
└── README.md
```

---

## VS Code Tips

- Install the **Live Server** extension (`ritwickdey.LiveServer`) for instant hot-reload.
- Install **Prettier** for formatting HTML/CSS.
- The `assets/` folder is ready for any speaker photos or logos you want to embed.

---

## QR Code (Slide 20)

The QR code is auto-generated from the current page URL via the free [QR Server API](https://goqr.me/api/).  
If you are presenting offline, the QR box will show a fallback message and the raw URL is still displayed below it.

To customize the destination URL, host the folder anywhere (GitHub Pages, Netlify, Vercel) and open the deployed URL — the QR code will reflect that address automatically.
