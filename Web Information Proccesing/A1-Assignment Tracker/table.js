
//this function will be called when button is pressed.
 function calculateAv() {
 console.log('hello')
 //setting the table and rows into varaibles
   var table = document.getElementById("fullTable");
   var rows = table.rows;
    var addme = 0;
   
   //going through each row and cell in a nested loop and the appropriate values from each row/column excluding the student id and name. it's stops at the end column
   for (var i = 1; i < rows.length; i++) {
     var cells = rows[i].cells;
     var sum = 0;
		 var numbers = 0;
     for (var x = 2; x < (cells.length -1); x++) {
       var cell = cells[x];
      addme = parseInt(cell.innerHTML);
        /* if(rows[i].cells[x].innerHTML === "-"){
                console.log("hello")
                rows[i].cells[x].style.background = "yellow";
          }  */
       if(!isNaN(addme)) {       
          sum += addme;
          numbers++;
       }
       
       //colours the background yellow particallys
       else if(isNaN(addme)){
       					rows[i].cells[x].style.background = "yellow";
       }
   
     }
     
     //takes total from the nested loop and dividin by the number of assignments the counter 
     var average = sum / numbers;
     //console.log(average)
     //stored this average value in the final cell    
     var final = "<td>" + Math.round(average) + "</td>";
      if(isNaN(average)) { 
      	//console.log(average);
          return "0" ;
       }
     rows[i].cells[7].innerHTML = final;
     	
     ///placing red background to cell with avergae value less than 40.
     if(average < 40){
 
     		rows[i].cells[7].style.background = "red";
   		}
          
   }
 
 }  
 
document.getElementById('calculateAv').onclick = calculateAv;