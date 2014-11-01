var Server = require("upnpserver");

var server=new Server({ name: "nodeServer" }, [
   {path: "/Users/donald/Desktop/MediaServer/Movies", mountPoint: '/My Movies', type: 'video'},
   {path: "/Users/donald/Desktop/MediaServer/TV", mountPoint: '/My TV Shows', type: 'video'}
]);

server.start();
