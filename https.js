/**
 * Proxy Auto-Config (PAC) File
 * All configurations and logic are contained within the FindProxyForURL function.
 */

// Configuration Section

// List of domains that should be routed through the proxy.
// Each domain is listed only once; both root and subdomains are handled.
var egards_vpn__l_domain = [
    "whatismyipaddress.com",
    "webbrowsertools.com",
    "parkxsconnect.com",
    "parkxs.nl",
    "xpark.eu",
    "brickyard.eu",
    "xpots.nl",
    "wpsenterprise.com",
    "skidata.com",
    "tkhsecurity.com"
];

// Set-like map of domains that should be routed through the proxy.
// Built from the list above for simple existence checks.
var egards_vpn__lookup = {};

for (var egards_vpn__i = 0; egards_vpn__i < egards_vpn__l_domain.length; egards_vpn__i++) {
    egards_vpn__lookup[egards_vpn__l_domain[egards_vpn__i]] = true;
}

// SSL proxy server configuration
var egards_vpn__proxyServer = "HTTPS vpn.egards.nl:443";

// Direct connection configuration
var egards_vpn__directConnection = "DIRECT";

/**
 * Helper function to determine if the host matches any domain in the map,
 * including both root domains and their subdomains.
 *
 * @param {string} host - The hostname of the URL being accessed.
 * @param {Object} domains - A set-like map of domains to match against the host.
 * @return {boolean} - Returns true if a match is found; otherwise, false.
 */
function egards_vpn__isHostMatch(host, domains) {
    // Convert host to lowercase to ensure case-insensitive matching
    var lowerHost = host.toLowerCase();

    // Find the final dot in the hostname
    var lastDotIndex = lowerHost.lastIndexOf(".");

    // A valid root domain requires at least one dot, for example example.com
    if (lastDotIndex === -1) {
        return false;
    }

    // Find the dot before the final domain part
    var secondLastDotIndex = lowerHost.lastIndexOf(".", lastDotIndex - 1);

    // If there is no second-to-last dot, the host is already the root domain
    // For example, example.com remains example.com
    var rootDomain = secondLastDotIndex === -1
        ? lowerHost
        : lowerHost.substring(secondLastDotIndex + 1);

    // Test whether the root domain exists in the configured domain map
    return domains[rootDomain] === true;
}

function FindProxyForURL(url, host) {
    // Determine whether to use the proxy or direct connection based on the host
    if (egards_vpn__isHostMatch(host, egards_vpn__lookup)) {
        return egards_vpn__proxyServer;
    }

    // Default to direct connection if no match is found
    return egards_vpn__directConnection;
}
