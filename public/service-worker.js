/* eslint-disable no-restricted-globals */

self.addEventListener('install', function (event) {
    console.log('sw installed');
});
self.addEventListener('fetch', function (event) {
    console.log('sw fetch');
    alert('yay')
});
self.addEventListener('push', function (event) {
    console.log('push event');
    
    const e = event.data.text()
    // console.log(e);
        if (self.Notification.permission === 'granted') {
            self.registration.showNotification('ServiceWorker Cookbook', {
                body: e,
            })
        }
})