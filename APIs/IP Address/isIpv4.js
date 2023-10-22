//Verifies to ensure that the given IP address is a valid IPv4 address.

var ip = "192.168.1.1";
gs.info("ip address is v4?: " + new IPAddress(ip).isV4());
