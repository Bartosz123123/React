# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

🛠️ Jak Obsłużyć Projekt (Uruchomienie)
Poniższe kroki pozwalają na uruchomienie aplikacji ReactShop w trybie deweloperskim.

1. Klonowanie i Instalacja Zależności
Upewnij się, że masz zainstalowany Node.js oraz Git.

Bash

# Sklonuj repozytorium
git clone [ADRES URL REPOZYTORIUM]

# Przejdź do katalogu projektu
cd nazwa-katalogu

# Zainstaluj zależności projektowe (m.in. react-router-dom, Vite)
npm install
2. Uruchomienie Aplikacji
Użyj standardowej komendy Vite do uruchomienia serwera deweloperskiego.

Bash

# Uruchomienie aplikacji w trybie deweloperskim
npm run dev
Aplikacja będzie dostępna w przeglądarce pod adresem wskazanym przez konsolę (zazwyczaj http://localhost:5173).
