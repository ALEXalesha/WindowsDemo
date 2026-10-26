<div align="center">

# WindowsDemo - Windows 11 style shell

**A Windows 11 style desktop shell that runs entirely in the browser: no server, no internet, no images or fonts from the original system. Icons, wallpapers and apps are drawn by code in this repository.**

[**▶ Open online →**](https://alexalesha.github.io/WindowsDemo/) &nbsp;·&nbsp; [Русская версия этого файла](README.ru.md)

[![Status](https://img.shields.io/badge/status-stable-brightgreen)](#) [![CI](https://github.com/ALEXalesha/WindowsDemo/actions/workflows/ci.yml/badge.svg)](https://github.com/ALEXalesha/WindowsDemo/actions/workflows/ci.yml) [![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML) [![Website](https://img.shields.io/badge/Website-open-0A84FF?logo=googlechrome&logoColor=white)](https://alexalesha.github.io/WindowsDemo/) [![Built with Claude Code](https://img.shields.io/badge/Built_with-Claude_Code-D97757?logo=claude&logoColor=white)](https://claude.com/claude-code)

Code, tests and docs are written by Claude (Anthropic) in Claude Code. Ideas, testing and decisions - Alexey.

</div>

> Fan-made interface concept. Not affiliated with or endorsed by Microsoft. Windows is a trademark of Microsoft Corporation.

The interface is in Russian.

![Desktop](docs/screens/win11_3-desktop.png)

![Start menu and windows](docs/screens/win11_3-start.png)

## What it does

- Windows that behave like windows: move, resize, snap to the halves and corners of the screen, minimise, maximise; task view, notifications.
- Start menu with search, all apps and a Games folder; taskbar with clock and tray.
- Files are kept in the browser (IndexedDB): File Explorer with drag and drop, cut and paste, import from disk, a preview pane, and a Recycle Bin.
- Apps: Notepad, Calculator, Settings (theme, accent colour, wallpaper, transparency, time format for the whole system), Browser with built-in pages, Photos, Media Player (synthesised music), Clock, Weather (demo data), Terminal, Paint and Messenger.
- **Games:** the ten games of the [Hub](https://github.com/ALEXalesha/ALEXalesha.github.io) collection
  open in a window: Cube World, Blockcity, Operation: Perimeter, Horizon Drift, Dino Run, Jump Jump,
  Hot Jungle, Space Gun, Falling Blocks and Sudoku. Each is its own repository: on GitHub Pages the
  window loads `../../<repository>/` of the same site (for example
  [AlexMine](https://alexalesha.github.io/AlexMine/)). Locally, clone the game repositories next to
  this one. A game in a minimised or inactive window is paused (the protocol is in
  `_os-shared/README.md`).


The shell lives in `win11_3/`; it is built from `win11_3/src/` by `node win11_3/src/build.js`. The root `index.html` just opens it.


## Run locally

Open `index.html` or `win11_3/index.html` in Chrome, Edge or Firefox.

## Tests

Playwright laws in `tests/` open the page by its file address in headless Chromium, one at a
time:

```
npm install
npx playwright install chromium
npm test
```

The tests for game windows run only when the game repositories lie next to this one; otherwise
they are skipped. Mouse capture in the tests is always a stub. `npm run screenshots` makes the pictures above.

## History

The shell was made in the [Hub](https://github.com/ALEXalesha/ALEXalesha.github.io) collection (folders `web/win11_3` and `web/_os-shared`). This repository carries it with its commit history, starting after the first raw import (it still had a four-square boot logo like the Windows one); the start page, the games table for the separately published games and the tests were added for this publication.

## Licence

MIT, see [LICENSE](LICENSE).
