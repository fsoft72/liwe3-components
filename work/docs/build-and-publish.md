# Building and Publishing tools

## Building

Inside the `work/scripts`` directory, you'll find two scripts:

- `build_component.sh`:  this is used to build a single component. It can take one or two arguments. The first argument is the component source directory (eg. `src/components/Button`) and the second is the `--version` flag. If `--version` is provided, the `version` field in the `package.json` file will be updated automatically.

- `build_all.sh`: this is used to build all components. It takes the optional `--version` flag.

### How building works

The `build_component.sh` script will:

- Copy the component source directory to `single-component-builder/src` directory
- Run the `build.sh` script in the `single-component-builder` directory
- Copy the built component to the `dist/components` directory

If during the build process, you have an error about missing dependencies, simply add them into `single-component-builder/package.json` file and run `pnpm i` in the `single-component-builder` directory.


## Publishing

Inside the `work/scripts` directory, you'll find two scripts:

- `publish_component.sh`: this is used to publish a single component. It takes one argument: the component built directory (eg. `dist/components/Button`).

- `publish_all.sh`: this is used to publish all components.
