# Notes Manager

Notes Manager is a compact notes application built with React and TypeScript, using Vite for development and build. It provides a demo-ready UI for creating, editing, and viewing notes, and includes a small in-memory repository plus mock data for quick local testing.

**Stack**

- Vite (dev server & build)
- React 19 + TypeScript
- Apollo Client for GraphQL interactions
- Zustand for lightweight state management
- Tailwind CSS for styling utilities
- ESLint + TypeScript for linting and type checks

**Highlights**

- Minimal, fast dev environment with hot reload.
- Modular `src/engine` layer with an in-memory database and repositories for easy mocking and tests.
- Forms handled with `react-hook-form` and validation helpers.

Getting started

```bash
npm install
npm run dev
```

Build

```bash
npm run build
```

Lint

```bash
npm run lint
```

Notes

- See `src/engine` for database and repository patterns used by the UI and mocks.
- The project is intentionally small so you can adapt the data layer to a real backend or extend GraphQL schemas.

Contributing

- Open issues or PRs. Keep changes focused and use conventional commit messages.

License

- Choose a license for the project (MIT recommended).

