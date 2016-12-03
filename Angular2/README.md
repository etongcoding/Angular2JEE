Angular2 Client
==============
Using Angular 2 client to call Java EE 7 backend

## Build this application!

### Prerequisite: 
Install Node.js and npm.
### Step 1: Create and configure the project.
#### Create the project folder
```shell
mkdir -p ~/etongcoding/Angular2JEE/Angular2
cd ~/etongcoding/Angular2JEE/Angular2
```
#### Create configuration files
1. package.json 
identifies npm package dependencies for the project.
2. tsconfig.json 
defines how the TypeScript compiler generates JavaScript from the project's files.
3. typings.json 
provides additional definition files for libraries that the TypeScript compiler doesn't natively recognize.
4. systemjs.config.js 
provides information to a module loader about where to find application modules, and registers all the necessary packages. It also contains other packages that will be needed by later documentation examples.

#### Install packages
```shell
npm install
```
### Step 2: Create your application.
```shell
mkdir app
vi app/app.module.ts
```
### Step 3: Create a component and add it to your application.
```shell
vi app/app.component.ts
```
### Step 4: Start up your application.
```shell
vi app/main.ts
```
### Step 5: Define the web page that hosts the application, add style.
```shell
vi index.html
vi styles.css
```
### Step 6: Build and run the application.
```shell
npm start
```


[Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)