# Syntax Linjeforening

Monorepository for Syntax Linjeforening using Turborepo.

## What's inside?

**Note:** yarn is used as package manager for this project

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org) app (frontend)
- `cms`: a [KeystoneJS](https://keystonejs.com/) app (backend/cms)
- `docs`: another [Next.js](https://nextjs.org) app (documentation if needed)
- `ui`: a stub React component library that can be shared across applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```