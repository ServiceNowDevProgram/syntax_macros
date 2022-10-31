//Determines whether the specified IP address is a valid IPv4 or IPv6 address.

var ip1 = "192.168.1.1";
gs.info("ip1 address is valid?: " + new IPAddress(ip1).isValid());

var ip2 = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";
gs.info("ip2 address is valid? " + new IPAddress(ip2).isValid());