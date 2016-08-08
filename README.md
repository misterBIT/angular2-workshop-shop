# Angular 2 workshop seed app 

This repository holds a simple demo seed app based on [angular2-starter](https://github.com/angular/angular2-seed/),

The "github browser" app in the original was replaced for a simple app with 3 sections

1.monsters (discussed on the 2nd day)
2.pets (built together with the students in the 1st day)
3.chat (disucssed on the 3rd day)

## Prerequisites

Node.js and npm are essential to Angular 2 development. 

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm. (not avilable for windows, other similar solutions exist) 

 WINDOWS ONLY run to install dependencies as global 
    npm install -g webpack webpack-dev-server typings typescript 
    
## Create a new project based on this app

Download this repo or clone it into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/angular2-workshop-seed my-proj
cd my-proj
```

if your have cloned, discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  // non-Windows
rd .git /S/Q // windows
```

### Create a new git repo
You could [start writing code](#start-development) now and throw it all away when you're done.
If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```
## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```

> If the `typings` folder doesn't show up after `npm install` please install them manually with:

> `typings install`

The `npm start` command uses webpack (w/ dev-server) to run the applicaiton
Shut it down manually with Ctrl-C.

You're ready to write your application.

### npm scripts

npm scripts defined in the `package.json`:

* `npm start` - runs the webpack compiler w/ dev-server, compiles changes delta to in memory-fs on the fly.
* `npm run build` - runs the webpack compiler to create production artifacts in dist folder.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.
