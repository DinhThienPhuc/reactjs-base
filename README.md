# React.JS Base

This is the React.JS Base project, organized as a monorepo containing smaller packages. Each package may include one or more base UI components, modules, or services used to build applications.

## Getting Started

We use `pnpm` to manage our workspace. You can explore [pnpm workspace](https://pnpm.io/workspaces) and [pnpm CLI](https://pnpm.io/cli/add) to learn the basics of `pnpm`.

For installation instructions, visit <https://pnpm.io/installation>.

Our project follows a `monorepo` structure and utilizes `pnpm` as the package manager due to its built-in support for `monorepo`, offering several advantages:

- Simplifies splitting components/modules/services/etc. into separate packages.
- Facilitates development, building, and deployment of packages with built-in configuration and CLI tools: pnpm workspace, pnpm CLI.
- Many popular libraries, such as `Next.js`, `Vue.js`, and `SvelteKit`, adopt the `monorepo` and `pnpm` approach.

We use `vite` as our build tool for both development and production environments.

The packages will look like that:

```js
@phantomthief-react/components.button
@phantomthief-react/hooks.useOnMounted
...
```

Each package will maintain its own version.

## Install packages across the entire workspace

```bash
pnpm i
```

## Naming packages

Please note that packages are named:

```bash
<package-scope>.<package-name>

// For example, with `constants` package laid inside `utils` scope
utils.constants
```

This is necessary when executing certain pnpm commands like the ones below

## Commands execution

### Run an application in develop mode

```bash
// Run single application
pnpm dev --apps=demo

// Run multi applications at once
pnpm dev --apps=demo,demo2

// Run all available applications at once
pnpm dev:all
```

### Generate package

This command will generate a new package using a basic template.

```bash
// Create a new component
pnpm generate components.flex

// Create a new service
pnpm generate services.styled-theme
```

### Run storybook

```bash
pnpm dev:storybook
```

### Build applications or packages

You can build multiple apps or packages simultaneously. Keep in mind that packages always have a scope prefix.

```bash
pnpm build --apps=demo --packages=components.flex,utils.constants
```

All packages can be built together at once

```bash
pnpm build:all
```

### Start applications

Once the build is complete, you can launch one or multiple apps simultaneously

```bash
pnpm start --apps=demo,demo2
```

You can start all applications

```bash
pnpm start:all
```

### Publish packages

Ensure that you update the CHANGELOG file by running the following command before publishing packages:

```bash
pnpm bump

pnpm publish --packages=demo,demo2
```

All packages can be published together at once

```bash
pnpm publish:all
```

### Analyze built package

Use the following command to enable the analyze bundle folder and see what’s inside the package:

```bash
// window
env ENABLE_ANALYZE=true pnpm build -p=<package.name>

// unix/linux
ENABLE_ANALYZE=true pnpm build:all

```

This process will produce a `statistics.html` file for exploring the structure and size of the package.

## Style Guide

`ESLint`, `Prettier`, and `TypeScript` are used to automatically apply parts of our style guide. To ensure complete linting support during local development, it is recommended to use Visual Studio Code with these extensions.

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

### Transient props and classNames

Follow these guidelines:

- Place all classNames on the component’s container according to its props.
- ClassNames for atom components are only needed in specific cases.
- Use classNames in the styled section of the component as dictated by transient props.

### Media queries

We should follow these media queries refered in `VIEWPORT` for consistency

```css
/* Mobile (Smartphones, Portrait) */
@media (max-width: 480px) {
  /* styles */
}

/* Mobile (Smartphones, Landscape) */
@media (min-width: 481px) and (max-width: 767px) {
  /* styles */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 991px) {
  /* styles */
}

/* Desktop */
@media (min-width: 992px) and (max-width: 1199px) {
  /* styles */
}

/* Wide Screen */
@media (min-width: 1200px) {
  /* styles */
}
```

## Commit Guide

### Fix eslint error

Enabling auto-fix for lint errors on save is recommended. Here’s an example configuration for VSCode:

```JSON
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
```

### Add changeset

A changeset must be provided whenever a package is modified. This file includes information about changes made in a branch or commit and is only created for commits with `fix`, `feat`, `revert`, or `refactor` actions. It provides:

- Details on what changes are being released
- The version number for the release (with a semver bump type)
- A changelog entry for the released packages

To add a changeset, run the following command:

```bash
pnpm changeset
```

Executing the command will prompt you with options such as:

- Picking the package you wish to update.
- Choosing the version bump type for the package (`major`, `minor`, or `patch`).
- Providing a summary of the change. If you leave it blank, an external editor will open.

[Read more about changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md)

### Commit

We will follow the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/)

Your commit will fail if it doesn’t meet these conditions:

- All linting errors must be fixed
- You must include at least one changeset
- The commit message must follow the commit convention

The standard commitlint terms:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- revert: Reverts a previous commit

### Do

- Have a meaningful commit message
- Choose the right commit type
- Scoped commit into one package like that: `feat(button): add onClick listener`

### Don't

- Skip commit hook by using `--no-verify` option!!!

## Versioning

Changesets control the versioning of packages. They specify which package gets updated and the version number for the update.

### Bump the version of packages

Run the following command to bump the version of packages:

```bash
pnpm bump
```

The command will perform the following actions:

- It will process all the changesets.
- It will automatically update the version of the relevant packages and generate changelogs based on the changesets.

After this process, you can commit the version changes and push them to the remote repository."

### Tips & Tricks

- A version update can include multiple changesets.
- The changesets are converted into changelog entries.
- The highest version from the changesets will be used to update the package versions.

## Release to npm registry

The steps to perform a release:

- Pull the latest code from the develop branch.
- Check out a new branch named `release/packages/*`.
- Run the command to generate a changelog for each component to be published

```bash
pnpm bump
```

- Verify the package version and review the changelogs.
- Push the release/packages/\* branch to the remote repository.
- Let GitHub Actions take care of the rest!

<!-- TODO: Remove zustand and use memo with compare callback to prevent re-render -->
<!-- TODO: Improve to load component on demand -->
<!-- TODO: Remove restProps and specific a prop for the custom prop: attributes -->
<!-- TODO: Use taiwind-css to reduce bundle size -->

## Component checklist

- Regularly verify component re-renders.
- Utilize named exports for components.

```typescript
export const TextField = () => <></>
```

- Isolate conditionally displayed elements into separate files and dynamically import them as needed using lazy loading.

```typescript
const HelperText = lazy(() =>
  import("@phantomthief-react/components.helper-text").then((module) => ({
    default: module.HelperText,
  })),
);

<Suspense>
  {helperTextProps?.children && (
    <HelperText
      {...helperTextProps}
      isError={!!error}
      variant={variant}
    >
      {error?.message ?? helperTextProps?.children ?? ""}
    </HelperText>
  )}
</Suspense>
```

- Specify the full name of components/modules within the same scope in the package.json.

```typescript
// Inside components.text-field
import { HelperText } from "@phantomthief-react/components.helper-text";
```

- For components/modules outside the current scope, reference the parent package.

```typescript
// Inside components.text-field
import { useSyncStateWithProps } from "@phantomthief-react/hooks";
```

- Prop ordering in components should adhere to the following guidelines:

```typescript
<Component
  {...restProps}            // Deprecated soon
  $fullWidth={fullWidth}    // Transient props, might deprecated too when use TaiwindCSS
  inputProps={{}}           // Override element props
  className="test-clsx"     // HTML native attributes
```

- Prefix interfaces with I and types with T.

```typescript
export interface ITextFieldProps
  extends HTMLAttributes<HTMLElement>,
    IFormFieldProps,
    IExtendable {
  variant?: TTextFieldVariant;
  clear?: TFunction<void>;
  captureOnFocus?: (e: React.FocusEvent<HTMLElement, Element>) => void;
  captureOnBlur?: (e: React.FocusEvent<HTMLElement, Element>) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  labelProps?: ILabelProps;
  preAdormentProps?: IPreAdormentProps;
  postAdormentProps?: IPostAdormentProps;
  helperTextProps?: IHelperTextProps;
}

export type TTextFieldVariant =
  (typeof TEXT_FIELD_VARIANT)[keyof typeof TEXT_FIELD_VARIANT];
```
