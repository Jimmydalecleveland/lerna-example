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