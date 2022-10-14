/**
* @Description : This script is used to Decrypt an Triple DES algorithm Encrypted string into normal string
* @encryptedString : String Encrypted with Triple DES algorithm
* @decrString : Decrypted string
**/

var geDecrypt = new GlideEncrypter(); 
var encrString = '<encryptedString>'; 
var decrString = geDecrypt.decrypt(encrString);  
gs.print("Decrypted string = " + decrString);
