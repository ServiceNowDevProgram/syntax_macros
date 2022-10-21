/**
* @Description : This script is used to Encrypts a clear string using the Triple DES algorithm
  @orignal_string : Orignal string / normal text
  @encrString : Encrypted String 
**/

var geEncrypt = new GlideEncrypter(); 
var orignalString = '<orignal_string>'; 
var encrString = geEncrypt.encrypt(orignalString); 
gs.info("Encrypted string = " + encrString); 
