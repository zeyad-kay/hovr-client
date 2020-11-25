// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(event) {
    console.log('sw installed');    
});
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', function(event) {
    console.log('sw fetch');    
});
// eslint-disable-next-line no-restricted-globals
self.addEventListener('push', function(event) {
    console.log('push event');    
});

