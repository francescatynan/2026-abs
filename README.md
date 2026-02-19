# 2026-abs

A flexible appointment booking system, a project providing practice in building in a modular monolith architecture pattern, within a monorepo.

## Stack

# Vite ⚡

<a href="https://vite.dev/">
  <img src="https://pbs.twimg.com/profile_images/2011008723234234368/dQRuG_z-_400x400.jpg" alt="Vite" width="120" />
</a>

> Next Generation Frontend Tooling

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

Vite (French word for "quick", pronounced [`/viːt/`](https://cdn.jsdelivr.net/gh/vitejs/vite@main/docs/public/vite.mp3), like "veet") is a new breed of frontend build tooling that significantly improves the frontend development experience. It consists of two major parts:

- A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with [rich built-in features](https://vite.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vite.dev/guide/features.html#hot-module-replacement).

- A [build command](https://vite.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.

In addition, Vite is highly extensible via its [Plugin API](https://vite.dev/guide/api-plugin.html) and [JavaScript API](https://vite.dev/guide/api-javascript.html) with full typing support.


### NestJS

<a href="http://nestjs.com/">
  <img src="https://nestjs.com/img/logo-small.svg" alt="NestJS" width="120" />
</a>

A progressive Node.js framework for building efficient and scalable server-side applications.

## Project setup

```bash
npm install -g @nestjs/cli
```

```bash
nest new 2026-ABS
```

```bash
$ npm install
```

## Compile and run the project

```bash
# vite dev
$ npm run dev

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

TBC.

## Packages

[@nestjs/cli](https://www.npmjs.com/package/@nestjs/cli)


| Package                                         | Version (click for changelogs)                                                                                                    |
| ----------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [vite](packages/vite)                           | [![vite version](https://img.shields.io/npm/v/vite.svg?label=%20)](packages/vite/CHANGELOG.md)                                    |
| [@vitejs/plugin-legacy](packages/plugin-legacy) | [![plugin-legacy version](https://img.shields.io/npm/v/@vitejs/plugin-legacy.svg?label=%20)](packages/plugin-legacy/CHANGELOG.md) |
| [create-vite](packages/create-vite)             | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |


## Resources

- [Vite Docs](https://vite.dev/guide/)
- [NestJS Documentation](https://docs.nestjs.com)

## Support

- See Vite [Contributing Guide](https://github.com/vitejs/vite/blob/main/CONTRIBUTING.md).
- Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Vite is [MIT licensed](https://github.com/vitejs/vite/blob/main/LICENSE).
Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
