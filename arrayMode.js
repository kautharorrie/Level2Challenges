function arrayMode(array){ /*code here*/
    var mode = 0;
    var count =0;
    for (i = 0;i < array.length; i++){
        arrayElement = array[i]; //assign the element in the array to a variable
        newCount = 0;
        // new for loop to iterate through the array again
        for (j=0; j < array.length; j++){
            // check if the arrayElement appears in the list 
            if(array[j]==arrayElement){
                //increse counter if statement is true
                newCount++;
            }
                if (newCount>count){
                    mode = arrayElement;
            }
            count = newCount; //set old counter to highest number of occurence of integer in array
            
        }
        newCount=0; //reset counter
    }
 
    return mode;
}
