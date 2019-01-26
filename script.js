 
var currentindex=1;


function  next()
{    
    
    currentindex++;     
    if(currentindex==6){
        currentindex=1;   
}   
                      
                     
                       document.querySelector("#down").setAttribute('href','#div'+ (currentindex));
                       console.log(currentindex);
                       document.getElementById('down').click();
                       
                       



                 
}





function prev()
{       
    currentindex--;
    if(currentindex==0)
    {                      currentindex=5;
   } 


              
             document.querySelector("#up").setAttribute('href','#div'+ (currentindex) );
             document.getElementById('up').click();
             console.log(currentindex);
             

            
          

}