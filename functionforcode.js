function Touch(b1, b2){
    if (b1.y-b2.y < (b1.height+b2.height)/2 && 
    -b1.y+b2.y < (b1.height+b2.height)/2 && 
    b1.x-b2.x < (b1.height+b2.height)/2 &&
    -b1.x+b2.x < (b1.height+b2.height)/2
    
)
   
    {
      return true;
   
    }
    else{
     return false;
  
  
    }
}
