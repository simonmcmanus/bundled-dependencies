# BundledDependencies

Auto generate your bundledDependencies

## Install

```
npm install bundled-dependencies
```

## Usage


In a directory with a package.json file just type:

```
bundled-dependencies
```

Takes a package.json file, looks at the dependencies object and adds each item
 it to the bundledDependencies array.

To use it I just create a file containing:

```js
require('bundled-dependencies')('./package.json');
```

I then call that file from my CI, run my tests, assuming the tests pass then run NPM pack and all the dependencies will be included in the generated package file.
