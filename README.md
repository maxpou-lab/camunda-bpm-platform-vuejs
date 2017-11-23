# camunda-bpm-platform-vuejs

## Installation

1. Setup Camunda BPM platform (see: https://hub.docker.com/r/camunda/camunda-bpm-platform/)
2. In `config/dev.env.js`, adapt the `CAMUNDA_URL` field according to your configuration
3. Install dependencies with `npm i`
4. Serve the app in dev mode with `npm run dev`

Example of process instance:

* 30802d71-d05a-11e7-ae60-0242ac110002
* 31df6f1e-d05a-11e7-ae60-0242ac110002

## Missing part

* Unit test (obviously)
* JSDoc on API part. See example [here](https://github.com/maxpou/gitvub/blob/master/src/api/github.js#L22-L25)
* CSS improvement

## Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# lint JS files (must be compliant with standardjs)
npm run lint

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
