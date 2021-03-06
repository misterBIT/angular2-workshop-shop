# Angular 2 workshop seed app 

This repository holds a seed based on [angular2-starter](https://github.com/angular/angular2-seed/),

The "github browser" app in the original was removed and only a very bare "home" route exists for the basic module/component/route boilerplate 
The simple example app that was here before was moved to [the samples repo](https://github.com/misterBIT/angular2-workshop-samples) 

## Prerequisites

Node.js and npm are essential to Angular 2 development. 

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v6.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm. (not avilable for windows, other similar solutions exist) 

 WINDOWS ONLY run to install npm script dependencies as global 
    ````
    npm install -g webpack@2.1.0-beta.22 webpack-dev-server@2.1.0-beta.4 typescript@2.0.2
    ````
    
## Create a new project based on this seed

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

The `npm start` command uses webpack (w/ dev-server) to run the application
Shut it down manually with Ctrl-C.

You're ready to write your application.

### npm scripts

npm scripts defined in the `package.json`:

* `npm start` - runs the webpack compiler w/ dev-server, compiles changes delta to in memory-fs on the fly.
* `npm test` - to run tests (src/**/*.spec.ts) in Karama
* `npm run build` - runs the webpack compiler to create production artifacts in dist folder.
* `npm run tdd` - to run test in continuous watch mode (reruns all tests on change§0
