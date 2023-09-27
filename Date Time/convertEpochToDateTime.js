convertEpochToDateTime: function(/*Integer*/ epochTime){
  var gdt = new GlideDateTime();
  gdt.setNumericValue(epochTime*1000);
  return gdt;
}
