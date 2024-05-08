# React.JS Base

This is the React.JS Base project. It is a monorepo that contains smaller packages. Each package can contain one or multiple base UI components or module or services that are used to build up applications.

## Getting Started

We use `pnpm` to manage workspace. Feel free to take a look at [pnpm workspace](https://pnpm.io/workspaces) and [pnpm CLI](https://pnpm.io/cli/add) to understand the basic of `pnpm`.

<https://pnpm.io/installation>

We use `monorepo` structure and `pnpm` as the package manager because `pnpm` has built-in support for `monorepo`, followed by these advantages:

- Easy to split components/modules/services/etc into separate packages.
- Easy to develop, build and deploy packages since `pnpm` provide built-in config and CLI: `pnpm workspace`, `pnpm CLI`

`monorepo` and `pnpm` is the approach of lots of popular libraries: Nextjs, Vuejs, SvelteKit, etc.

`vite` is used as build tool for development and production environments.

The packages will look like that:

```js
@phantomthief-react.components.button
@phantomthief-react.hooks.useEffectOnce
...
```

Each package will have its own version.

## Install packages for the entire workspaces

```bash
pnpm install
```

## Build and Test

```bash
# Build all packages
pnpm build

# Perform an action to a specific package
pnpm --filter [package_name] [action_name]
```

## Style Guide

We use tools: ESLint, Prettier, TypeScript to automatically enforce parts of our style guide.

It is recommended to use Visual Studio Code with the following extensions to ensure fully linting support during local development.

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## Commit Guide

### Fix eslint error

It is recommend to enable auto fix all lint error on saving. Example for vscode:

```JSON
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
```

### Add changeset

Whenever a modification is made to a package, a changeset should be provided. A changeset is a file contains information about changes made in a branch or commit. A changeset is only generated when we commit with an action is `fix`, `feat`, `revert`, `refactor`. It contains three kind of information:

- WHAT we need to release
- WHAT VERSION we are releasing packages at (using a semver bump type)
- A CHANGELOG ENTRY for the released packages

Run the following command to add a changeset:

```bash
pnpm changeset
```

You will be prompted with a set of options to choose from when you execute the command. These options include:

- Selecting the package you would like update.
- Choosing the type of version you want to bump for the package (major, minor, or patch).
- Adding a summary for the change. You can submit an empty line to open an external editor.

[Read more about changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md)

### Commit

We will follow the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/)

Your commit will fail if it did not sastify these conditions:

- Fix all linting error
- Include atleast one changeset
- Commit message follows the commit convention

### Do

- Have a meaningful commit message
- Choose the right commit type
- Scoped commit into one package like that: `feat(button): add onClick listener`

### Don't

- Skip commit hook by using `--no-verify` option!!!

## Versioning

Versioning of packages are coupled to changesets. The changesets added above determine which package is bumped and which version is used.

### Bump the version of packages

Run the following command to bump the version of packages:

```bash
pnpm bump
```

These actions will be performed by the command:

- It will consume all the changesets.
- Based on the consumed changesets, it will automatically increase the version of the appropriate packages and generate the changelogs.

Once this action is done, you can commit the version change and push it to the remote.

### Tips & Tricks

- A version change can contains multiple changesets.
- The changesets will be converted to the changelogs.
- The highest version of the changesets will be chosen to bump the version of the packages.

## Release to npm registry

The steps to perform an releasing:

- Pull the latest develop source code.
- Checkout to new branch with formated name as `release/\*`.
- Review the version of package and the ChangeLogs.
- Push `release/*` branch to the npm registry.
