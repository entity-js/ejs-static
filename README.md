# EntityJS - Utilities

## static

Provides a global static which can be used across multiple instances of cached
modules and submodules.

### Usage

```javascript
var ejsStatic = require('ejs-static');

ejsStatic('ejs-listener', {}).get();
```
