# Bun + Svelte 5 Template 🚀

This is a minimalist and lightning-fast starter template for building web applications with **Svelte 5** and **Bun**.

The template uses Bun's built-in web server and bundler, meaning you don't need large build tools like Vite or Webpack. You get instant startup, Hot Module Replacement (HMR), and full TypeScript support out of the box.

## ✨ Features

- **Svelte 5:** Modern UI framework (supports the new Runes like `$state`).
- **Bun:** All-in-one tool (package manager, bundler, and local server).
- **TypeScript:** Type safety pre-configured.
- **VS Code Ready:** Includes Workspace settings that hide unnecessary files (`bun.lock`) for a cleaner workspace.

## 🛠 Prerequisites

To use this project, you need to have [Bun](https://bun.sh/) installed on your machine.

For Mac/Linux:
curl -fsSL https://bun.sh/install | bash

For Windows (PowerShell):
powershell -c "irm bun.sh/install.ps1 | iex"

## 🚀 Getting Started

1. **Clone or download this project.**
2. **Install dependencies:**
   Open your terminal in the project folder and run:
   bun install
3. **Start the development server:**
   bun run dev

The application will now be available in your browser at **http://localhost:3000**. Changes you make to the code will update automatically.

## 📜 Available Scripts

In `package.json` you will find the following command:

- `bun run dev` – Starts the local development server with HMR on port 3000.

## 💻 VS Code Setup

For the best developer experience, it is recommended to use **VS Code** with the following extension:

- **Svelte for VS Code** (by Svelte)

This ensures correct syntax highlighting and support for Svelte 5-specific code.

## 📁 Folder Structure

```mermaid
graph LR
    %% Hovedmappe
    Root["📁 / (Root)"]
    
    %% Mapper på øverste nivå
    Root --- vscode["📁 .vscode/"]
    Root --- src["📁 src/"]
    Root --- static["📁 static/"]
    
    %% Filer i Root
    Root --- gitignore["📄 .gitignore"]
    Root --- bunlock["📄 bun.lock"]
    Root --- bunfig["📄 bunfig.toml"]
    Root --- index["📄 index.html"]
    Root --- package["📄 package.json"]
    Root --- readme["📄 README.md"]
    Root --- server["📄 server.ts"]
    Root --- tsconfig["📄 tsconfig.json"]
    
    %% Fil i .vscode
    vscode --- vscode_settings["📄 settings.json"]
    
    %% Filer i src-mappen
    src --- app["📄 App.svelte"]
    src --- global["📄 global.d.ts"]
    src --- main["📄 main.ts"]
    
    %% Filer i static-mappen
    static --- favicon["📄 favicon.ico"]
