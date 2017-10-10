# Local/Session Storage

Web storage allows user to save and retrieve data from their own browsers storage systems. These storage techniques were introduced with HTML5, before HTML5 data had to be stored in cookies and persisted between each server request. With these new HTML5 storage systems large amount of data can be stored quicker and more securely.

Web storage is per origin, which means each host has it's own separate web storage. Each page from the same origin and access all web storage data.

The two types of web storage are `window.localStorage` and `window.sessionStorage`.

LocalStorage|SessionStorage
---|---
Data is stored without expiration date. When a browser is closed all data is persisted and not deleted. | Stores data for one sessions. Data is lost when session is ended.

## Web storage
Data is stored in name value pairs. All data is stored as a `string` and must be converted when another data type is needed.

### Code examples
Setting a new item:
```
localStorage.userName = 'test@test.com';
```
Removing an item:
```
localStorage.removeItem("userName");
```
