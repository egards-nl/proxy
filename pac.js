/**
 * Proxy Auto-Config (PAC) File
 * All configurations and logic are contained within the FindProxyForURL function.
 */

function FindProxyForURL(url, host) {
    // Configuration Section

    // List of domains that should be routed through the proxy.
    // Each domain is listed only once; both root and subdomains are handled.
    var proxyDomains = [
        "whatismyipaddress.com",
        "webbrowsertools.com",
        "parkxsconnect.com",
        "parkxs.nl",
        "egards.fluxcloud.eu"
    ];

    // Proxy server configuration
    var proxyServer = "PROXY vpn.egards.nl:3128";

    // Direct connection configuration
    var directConnection = "DIRECT";

    /**
     * Helper function to determine if the host matches any domain in the list,
     * including both root domains and their subdomains.
     *
     * @param {string} host - The hostname of the URL being accessed.
     * @param {Array} domains - An array of domains to match against the host.
     * @return {boolean} - Returns true if a match is found; otherwise, false.
     */
    function isHostMatch(host, domains) {
        // Convert host to lowercase to ensure case-insensitive matching
        var lowerHost = host.toLowerCase();

        // Iterate through each domain in the list
        for (var i = 0; i < domains.length; i++) {
            var domain = domains[i].toLowerCase();

            // Exact match for the root domain
            if (lowerHost === domain) {
                return true;
            }

            // Check if the host is a subdomain of the current domain
            // For example, sub.example.com ends with .example.com
            if (lowerHost.endsWith("." + domain)) {
                return true;
            }
        }

        // No matches found
        return false;
    }

    // Determine whether to use the proxy or direct connection based on the host
    if (isHostMatch(host, proxyDomains)) {
        return proxyServer;
    }

    // Default to direct connection if no match is found
    return directConnection;
}
