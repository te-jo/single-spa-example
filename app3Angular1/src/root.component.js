import angular from 'angular';
import * as singleSpa from 'single-spa';

angular
    .module('app')
    .component('root', {
        template: `
            <div style="margin-top: 100px;">
              This was rendered by App3 which is written in Angular 1.6
            </div>
            
            <a href="#/app3/subroute1">Subroute 1</a>
            <a href="#/app3/subroute2">Subroute 2</a>
            <br>
            
            <button ng-click="vm.navigateToAngularApp()" style="margin-top: 50px">Navigate to Angular app (subroute 1)</button><br>
            <ui-view />
        `,
        controllerAs: 'vm',
        controller($timeout) {
            const vm = this;

            vm.navigateToAngularApp = function() {
                singleSpa.navigateToUrl("#/app5/subroute1");
            }
        }
    });
