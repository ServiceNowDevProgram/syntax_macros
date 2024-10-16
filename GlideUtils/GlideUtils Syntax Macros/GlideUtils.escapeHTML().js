var unsafeString = '<script>alert("Hello");</script>';
var safeString = GlideUtils.escapeHTML(unsafeString);
gs.info('Escaped HTML: ' + safeString);  // Output: &lt;script&gt;alert(&quot;Hello&quot;);&lt;/script&gt;

