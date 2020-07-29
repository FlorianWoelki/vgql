<a href="https://github.com/FlorianWoelki/vgql">
    <img src="https://i.imgur.com/je45bPG.png" alt="vgql-logo" align="right" height="150" />
</a>

# 🖥 VGQL

VGQL is used to automatically generate Vue.js web and GraphQL server projects from the command line. It will generate a JavaScript or TypeScript Vue.js and GraphQL (with or without typeorm) setup.

:star: Star us on GitHub — it helps!

<a href="https://www.npmjs.com/package/vgql"><img src="https://badge.fury.io/js/vgql.svg"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/FlorianWoelki/vgql.svg"></a>
<a href="https://www.npmjs.com/package/vgql"><img src="https://img.shields.io/npm/dt/vgql.svg"></a>
<a href="https://www.npmjs.com/package/vgql"><img src="https://img.shields.io/npm/dm/vgql.svg"></a>

## 📖 Overview

The goal of this project is to simplify the repeating task of creating projects with Vue.js and GraphQL. In detail, this CLI generates a `web` directory, which has a Vue.js project, and a `server` directory, which has a fully working GraphQL API.

In the future, the project will combine Nuxt.js and GraphQL projects as well.

## 💻 Installation

Install the cli with npm

```bash
npm install -g vgql
```

Then you can run the interactive CLI with:

```bash
vgql
```

## 🏗 Supported Tech

### JavaScript

#### Front-End

- [Vue.js](https://vuejs.org/)

#### Back-End

- [GraphQL](https://graphql.org/)

### TypeScript

#### Front-End

- [Vue.js](https://vuejs.org/) with [Vue Property Decorator](https://github.com/kaorun343/vue-property-decorator)

#### Back-End

- [GraphQL](https://graphql.org/) with [TypeGraphQL](https://typegraphql.com/)

#### Extras

- [TypeORM](https://typeorm.io/) _for now in combination with postgres_ - easily accessing databases
- [TailwindCSS](http://tailwindcss.com/) - for easy use with utility classes

## 😕 Issues

For problems directly related to the CLI, [add an issue on GitHub](https://github.com/FlorianWoelki/vgql/issues)

## 🚀 Releasing

_Coming Soon_
