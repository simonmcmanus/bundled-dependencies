#BundledDependencies

##Install

```
npm install bundled-dependencies
```

Takes a package.json file, looks at the dependencies object and adds each item
 it to the bundledDependencies array.

To use it I just create a file with this in. I then call that file from my CI,
run my tests, assuming the tests pass then run NPM pack and all the dependencies will be included generated package file.

```js
require('bundled-dependencies')('./package.json');
```
