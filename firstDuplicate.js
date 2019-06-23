function FirstDuplicate(array){ /*code here*/
    var dup = {}; // create a new object 
    
    for (i =0; i < array.length; i++ ){
        if(dup.hasOwnProperty(array[i])){
            return array[i];
        } else {
            dup[array[i]] = "checked"; // changes the value in the list to "checked" to confirm that the number was checked already
            
        }
    } return -1;
    
    
}
