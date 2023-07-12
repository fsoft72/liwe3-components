## First run

For the first run you need to install needed packages launching

```javascript
pnpm i
```

When completed build all the compoenents running

```bash
./work/scripts/build_all.sh
```

and finally, to install components dependecies, run again

```javascript
pnpm i
```


## Styles management

The ThemeSwitcher component “sass” folder contains all the scss files needed to compile the two main css files: global.css and variables.css.

It is possibile edit the single scss files in the sass directory to change to customize the final global and variables css files as needed. After editing run

```javascript
pnpm run compile-sass-variables
```

```javascript
pnpm run compile-sass
```

to compile respectively variables.css and global.css