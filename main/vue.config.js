import {registerMicroApps, start} from 'qiankun';
// const { registerMicroApps, start } = require('qiankun');

registerMicroApps([
    {
        name: 'vue app',
        entry: { scripts: ['//localhost:7001/main.js'] },
        container: '#yourContainer',
        activeRule: '/yourActiveRule',
    }, {
        name: 'vue app',
        entry: { scripts: ['//localhost:7002/main.js'] },
        container: '#yourContainer2',
        activeRule: '/yourActiveRule2',
    },
    {
      beforeLoad: [
        app => {
          console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
        },
      ],
      beforeMount: [
        app => {
          console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
        },
      ],
      afterUnmount: [
        app => {
          console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
        },
      ],
    },
]);
start();