# node-googl
A simple module for the goo.gl shortening service.

## Getting Started
Install the module with: `npm install node-googl`

```javascript
var googl = require('node-googl');

googl.shorten('https://github.com/deubaka/node-googl', 'your goo.gl API key', function(err, shortenedUrl) {
	if (err) {
		throw err;
	}
    
	console.log('Shortened URL: ' + shortenedUrl);
});
```

## License
Copyright (c) 2016 Deuphil Kaufmann (deubaka)

Licensed under the MIT license.