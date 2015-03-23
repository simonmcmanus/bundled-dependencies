'use strict';

module.exports = function(packageFile) {
  var fs = require('fs');
  var pkg = require(packageFile);

  if(pkg.dependencies) {
    pkg.bundledDependencies = Object.keys(pkg.dependencies);

    fs.writeFile(packageFile, JSON.stringify(pkg, null, 4), function(error) {
      if (error) {
        throw error;
      }
      console.log('Package.json updated with the following bundled dependencies:');
      console.log(pkg.bundledDependencies);
    });    
  } else {
    console.log('No dependencies found');
  }
};
