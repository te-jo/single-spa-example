# single-spa-example

### Simplistic SPA example with Angular & Angular.js

In each individual app folder, run: 

1. `npm install`

2. `npm run watch:portal`

Make sure you are using newer node version before running `npm install` (I use v13.8.0).

If you're encountering issues, try deleting **node_modules** folder and repeating the steps above.

Lastly, when all three apps are running, in **portal** (config) folder:

1. `npm install`

2. `npm run watch`

and open http://localhost:9000!


***

This example is created with a help of https://github.com/me-12/single-spa-portal-example.

On single spa official website there are some example projects: https://single-spa.js.org/docs/examples, I would single out this one to check out:

https://github.com/jualoppaz/single-spa-login-example-with-npm-packages

One more potentially useful example:
https://lazypandatech.com/blog/Microfrontend/10/Create-Microfrontend-Application-using-Single-SPA-framework

Also, single-spa **slack channel** can be a source of some useful information!