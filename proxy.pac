/**
 * Proxy Auto-Config (PAC) File
 * Refactored to allow configurable domains for proxying.
 */

// Configuration Section

// Array of domain patterns that should be routed through the proxy
var PROXY_DOMAINS = [
    "whatismyipaddress.com",  
    "*.whatismyipaddress.com",
    "parkxsconnect.com",
    "*.parkxsconnect.com",
    "parkxs.nl",
    "*.parkxs.nl"
];

// Proxy server configuration
var PROXY_SERVER = "PROXY vpn.egards.nl:3128";

// Direct connection configuration
var DIRECT_CONNECTION = "DIRECT";

/**
 * Determines whether the given host matches any pattern in the specified list.
 *
 * @param {string} host - The hostname of the URL being accessed.
 * @param {Array} patterns - An array of domain patterns to match against the host.
 * @return {boolean} - Returns true if a match is found; otherwise, false.
 */
function isHostMatch(host, patterns) {
    for (var i = 0; i < patterns.length; i++) {
        if (shExpMatch(host, patterns[i])) {
            return true;
        }
    }
    return false;
}

/**
 * The main function that determines the appropriate proxy for a given URL.
 *
 * @param {string} url - The full URL being accessed.
 * @param {string} host - The hostname extracted from the URL.
 * @return {string} - Returns the proxy configuration string.
 */
function FindProxyForURL(url, host) {
    if (isHostMatch(host, PROXY_DOMAINS)) {
        return PROXY_SERVER;
    }
    return DIRECT_CONNECTION;
}
