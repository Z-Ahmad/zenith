# Zenith - Modern Document Management Platform

A Notion-inspired document management platform built with Next.js and React, featuring real-time updates and a sleek dark-mode interface. Create, organize, and share documents with a powerful rich text editor. Changes sync instantly across all users through Convex's real-time database.

## Features

- 🚀 Real-time document updates with Convex DB
- 📝 Rich text editing powered by BlockNote
- 🌓 Dark mode support
- 📁 Hierarchical document organization
- 🖼️ Cover images and emoji support
- 🔐 Authentication with Clerk
- 🔍 Command palette (⌘/Ctrl + K)
- 🌐 Public document sharing
- 📱 Responsive design

## Tech Stack

- Next.js 14
- React 18
- Convex for real-time data syncing
- Clerk Authentication
- EdgeStore for file storage
- BlockNote Editor
- TailwindCSS
- TypeScript

## Core Components

### Document Editor
The editor component uses BlockNote for rich text editing with instant updates and file upload support.

### Cover Image Management
Handles document cover images with upload, replace, and remove functionality using EdgeStore.

### Real-time Updates
Uses Convex to sync document changes instantly across all users viewing the same document.

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/convex` - Backend functions and schema
- `/lib` - Utility functions
- `/hooks` - Custom React hooks

## Authentication

Authentication is handled by Clerk, providing secure Google and GitHub sign-in options.

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables:
```bash
env
CONVEX_DEPLOYMENT= 
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

4. Start the development server:
```bash
npm run dev
```
