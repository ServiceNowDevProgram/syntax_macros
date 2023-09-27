//Verifies to ensure that the given IP address is a valid IPv6 address.

var ip = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";
gs.info("ip address is v6?: " + new IPAddress(ip).isV6());