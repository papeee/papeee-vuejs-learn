# Installation guide for Lite-Server, Node modules and RollUp

 Also includes experience from installations

## Install Yarn if not

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

apt install yarn

- Needed commands for Yarn (v. 1.19.1)

- Make package.json:

yarn init -y

- (run this in project folder)

- It did package.json, yarn.lock and node folder with modules

## Install Lite-Server

yarn global add --save-dev lite-server

- It installed 4 packages and saved dependies for them

## Start serving

lite-server

## Site

- localhost:3000

### Links

- <https://www.hostinger.com/tutorials/how-to-install-yarn-on-ubuntu/>
- <https://www.freecodecamp.org/news/how-you-can-use-lite-server-for-a-simple-development-web-server-33ea527013c9/>

## RollUp

yarn install rollup --save-dev

- create rollup.config.js

- create main.js and index.html to src folder
  (create folder if not have: mkdir src)

- create MyModude.js to src subfolder modules
  (create folder if not have: mkdir modules)

yarn run build

- It installed 4 packages and saved dependies for them

### Babel for RollUp

- Babel makes code to be support for older browsers

yarn add @babel/core @babel/preset-env rollup-plugin-babel --save-dev

- it saved 91 dependencies

#### Configured rollup.config.js for babel

- import babel from 'rollup-plugin-babel';

  ,plugins: plugins: [ babel ({ exclude: 'node_modules/**' }) ]

- Build bundle.min.js again that come different bundle.min.js

yarn run build

- makes new bundle.min.js

#### Install nonES module handling

- can use third-party modules
- module converts into JavaScript ES6 version

yarn add rollup-plugin-node-resolve ollup-plugin-commonjs --save-dev

### Third-Party library example

- Lodash makes JavaScript easier with arrays, numbers, objects, strings

yarn add lodash --save-dev

#### Added rollup.config.js

- import resolve from 'rollup-plugin-node-resolve';
- import commonjs from 'rollup-plugin-commonjs';

- inside output
    globals: {
            'lodash': '_',
        }

- inside plugins
    resolve(),
    commonjs()

#### Added main.js

- import _ from 'lodash';

- const arr = _.concat([1, 2, 3], 4, [5]);

## Compress to minimize output

### Uglity plugin

- makes bundle more readable

yarn add rollup-plugin-uglify --save-dev

- it saved 6 dependencies

#### 4th time to edit rollup-config.js

- Edit for uglity

#### Added

- import { uglify } from 'rollup-plugin-uglify';

#### Inside plugin

 ,uglify()

 yarn run build

- built done in 15s
- Now bundle.min.js is more readable

### Terser

- removed babel and uglity & added terser plugin
- also from package.json

yarn add rollup-plugin-terser --dev

- saved 6 dependencies

#### 5th edit to rollup.config.js

- edit for terser

#### Added import line

import { terser } from 'rollup-plugin-terser'

#### Added outside from block to end

rollup({
  input: "./src/main.js",
  plugins: [terser()]
});

yarn run build

- built done in 12s
