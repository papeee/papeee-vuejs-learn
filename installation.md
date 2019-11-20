# Installation guide for Lite-Server, Node modules and RollUp

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
- module converts into ES6 version

yarn add rollup-plugin-node-resolve ollup-plugin-commonjs --save-dev
