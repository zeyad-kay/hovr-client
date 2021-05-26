import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './index.css';
// window.addEventListener('appinstalled', (evt) => {
//   // Log install to analytics
//   console.log('INSTALL: Success');
// });
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// function urlBase64ToUint8Array(base64String) {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/-/g, '+')
//     .replace(/_/g, '/');

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }
// navigator.serviceWorker.ready.then((reg) => {
  
//   Notification.requestPermission().then(val => {
//     if (val === 'granted') {
//       reg.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: urlBase64ToUint8Array('BBIIThFcIcL9jtG4gvBXeVIS_ObTbv7Rrll7pxVGKoqHhK3CGqxrXbmX2F149eCXqa0EnWe9qJPwzIi3IJl0gkY')
//       }).then(sub => {
        
//         fetch('http://localhost:5000/nots', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(sub.toJSON())
//         }).then(res => res.text()).then(res => {console.log(res);})
//       })
//     } else if (val === 'denied') {
//       console.log(val);
//     }
//   })
// })

// function getServerKey() {
//   fetch('http://localhost:5000/subscribe/notifications', {
//     method: 'POST',
//   })
//     .then(res => res.json())
//     .catch(err => {console.log(err);});
// }