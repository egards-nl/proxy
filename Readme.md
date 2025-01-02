# Egards VPN Proxy
This document shows how to use VPN proxy to access some Egards services like ParkXS.


## Browser Extension
The recommended browser extension for the proxy is **Proxy Switcher** which can be found on the 
[Chrome Web Store](https://chromewebstore.google.com/detail/proxy-switcher/iejkjpdckomcjdhmkemlfdapjodcpgih). To ensure that the extension is active, it should be **pinned**.

![Proxy Switcher](img/pac.js-first-screen.png)

## Configuration
The proxy can be configured using a Proxy Auto-Config (PAC) file. For Egards, PAC file is already created and available on the URL below.

### PAC URL
```js
https://proxy.egards.nl/pac.js
```

To complete the configuration, on the browser extension select PAC, and enter the PAC URL.
![PAC URL](img/proxy-switcher-select-pac.png)

## Using the VPN Proxy
To use the proxy, simply visit the Egards applications like ParkXS. On Chrome, it will trigger a pop up asking for username and password for the proxy.
Once the correct username and password is entered and accepted, it should be set automatically set for future visits.

For the proxy username and password, please contact Egards Administrator.