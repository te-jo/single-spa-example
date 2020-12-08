import 'zone.js';
import * as singleSpa from 'single-spa';
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'

async function init() {
    const globalEventDistributor = new GlobalEventDistributor();
    const loadingPromises = [];


    // app2: The URL "/app2/..." is being redirected to "http://localhost:9002/..." this is done by the webpack proxy (webpack.config.js)
    loadingPromises.push(loadApp('app2', '/app2', '/app2/singleSpaEntry.js', '/app2/store.js', globalEventDistributor));

    // app3: The URL "/app3/..." is being redirected to "http://localhost:9003/..." this is done by the webpack proxy (webpack.config.js)
    loadingPromises.push(loadApp('app3', '/app3', '/app3/singleSpaEntry.js', null, null)); // does not have a store, so we pass null

    // app5: The URL "/app5/..." is being redirected to "http://localhost:9005/..." this is done by the webpack proxy (webpack.config.js)
    loadingPromises.push(loadApp('app5', '/app5', '/app5/singleSpaEntry.js', '/app5/store.js', globalEventDistributor));

    // wait until all stores are loaded and all apps are registered with singleSpa
    await Promise.all(loadingPromises);

    singleSpa.start();

    //open app5 on init
    singleSpa.navigateToUrl('#/app5');
}

init();



