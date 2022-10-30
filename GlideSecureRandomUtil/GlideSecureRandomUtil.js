//Methods for generating texts, long values, and integers are offered through the scoped GlideSecureRandomUtil API.

//getSecureRandomInt() -Generates a pseudo-random integer.
gs.info(GlideSecureRandomUtil.getSecureRandomInt());

//getSecureRandomIntBound(Number bound) Generates a pseudo-random integer between 0 (inclusive) and the bound (exclusive) value that you pass into the method.
gs.info(GlideSecureRandomUtil.getSecureRandomIntBound(100));

//getSecureRandomLong() Generates pseudo-random long value.
gs.info(GlideSecureRandomUtil.getSecureRandomLong());

//getSecureRandomString(Number length) Generates a random alpha-numeric String with the specified length.
gs.info(GlideSecureRandomUtil.getSecureRandomString(20));