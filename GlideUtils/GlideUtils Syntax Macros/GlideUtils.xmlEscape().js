var xmlString = '<name>John & Jane</name>';
var escapedXML = GlideUtils.xmlEscape(xmlString);
gs.info('Escaped XML: ' + escapedXML);  // Output: &lt;name&gt;John &amp; Jane&lt;/name&gt;
