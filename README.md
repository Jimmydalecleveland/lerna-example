# Lerna Monorepo Starter

To setup, start by running:
```
npm run bootstrap
```

Which will run [`lerna bootstrap`](https://github.com/lerna/lerna/tree/main/commands/bootstrap#readme) to link local package dependencies.

## Adding internal dependencies to packages
To use @jimmydc/monorepo-test1 in the @jimmydc/monorepo-test2 package, it has been installed with the following command already:
```
npx lerna add @jimmydc/monorepo-test1 --scope=@jimmydc/monorepo-test2
```

This will need to be done for any future packages that need to be setup.

## Initial Publish for Scoped (@) Packages
The first time you publish a scoped package to the public NPM registry, you must pass the `--access public` flag, because scoped packages are private by default
This doesn't seem to work when passed to `lerna publish`, so I had to manually publish each version with `npm publish --access public`

After that, you can use `lerna publish` as usual to publish and bump versions.

## Conventional Commits
No extra packages are needed outside of `lerna` to take advantage of conventional commits. The `lerna.json` file has been added to set it up to work during CI without prompts. This allows a lot of convenience with publishing because the version for all packages can be determined from their commit messages.