//cookies 
//savetable fucntion saves data into a var.(going through the entire table)
/* var data = documents.cookie; */
function saveTable()
{
     var table = document.getElementById("fullTable");
 		 var noOfRows = table.rows[0].cells.length; // amount of cols
     var noOfCols = table.rows.length;// amount of rows
     var data = '';
     for(var i = 1; i < table.rows.length; i++)
     {
         for(var j = 0; j < table.rows[0].cells.length-1; j++)
        {
                data += table.rows[i].cells[j].innerHTML + ",";
          }
     }
 
 	 setCookie("data", data, noOfCols, noOfRows, 60);
   alert("Cookie Saved");
}

//sets the cookie for some time
function setCookie(cname,cvalue,noOfRows, noOfCols,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function loadCookie()
{
  var table = document.getElementById("fullTable");
  
  console.log()
  var rowLength = table.rows.length;
  console.log(rowLength);
  var endOfCol = table.rows[0].cells.length;
  console.log(endOfCol);
  var data = getCookie("data");  
  var array = data.split(',');
  var count = 0;
  
  //acts very wierd when inpur value  are considered 
  /*this can be uncominted accordingly aswell*/
  
  for(var i =1;i<rowLength;i++)
  {
    for(var j = 0; j <=endOfCol - 1; j++)
    {       
      table.rows[i].cells[j].innerHTML = array[count];
      count++;
       calculateAv()
    }
    //it doesnt quiet work for some reason 
         
  } 
  
for(var k = 0;k<=rowLength;k++)
  {	
     appendRow()
  }
  
  for(var l = 0; l <= endOfCol - 5; l++)
   {       
     
       appendColumn()
     
   } 
    
}

// Read cookie
function getCookie(cname) {
  var name = cname + "=";
/*   var decodedCookie = decodeURIComponent(document.cookie); */
  var ca = document.cookie.split(';')
  //decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//read cookie 
/* 
function readCookie() {
  alert(data);
} */



// append row to the HTML table
function appendRow() {
console.log('hello')
    var tbl = document.getElementById('fullTable'), // table reference
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), '-', 'row');
    }
}

// create DIV element and append to the table cell
 function createCell(cell, text, style) {
   text = document.createTextNode(text);
   cell.className = 'input-box';
   document.getElementsByClassName('input-box').contentEditable = "true";
   cell.contentEditable = "true"; //sets contentEditable 

   cell.appendChild(text);

 }


//adding column.
// append column to the HTML table
function appendColumn() {
    var tbl = document.getElementById('fullTable'), // table reference
        i;
    // open loop for each row and append cell
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length - 1), '-', 'col');
    }
    
    headerStyle()
}

function headerStyle(){
var table = document.getElementById('fullTable').rows,
     i, j;

   for (i = 0; i < 1; i++) {
     for (j = 3; j < table[i].cells.length - 1; j++) {
       var x = table[i].cells;
       var counter = (j - 1); //add one to each the title.
       x[j].innerHTML = "<div>"+ "ASSIGNMENT " +  counter+ "</div>" ;
       x[j].style.fontWeight = "bold";
       x[j].style.background = "lightgreen";
     }
   }
 
}

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
       
       var cell2 = rows[i].cells
       for(var k = 0; k< cell2.length; k ++ ){
       
       if(k==cell2.length-1){
       rows[i].cells[k].innerHTML = final;
       
       if(average < 40 ){
            rows[i].cells[k].style.background = "red";
          }
          
          else{
     
          		rows[i].cells[k].style.background = "white";
          
          }
       }
        
        ///placing red background to cell with avergae value less than 40.
         
       }          
   }
 }  
 
 
 
 
document.getElementById('calculateAv').onclick = calculateAv;
document.getElementById('appendRow').onclick = appendRow;
document.getElementById('appendColumn').onclick = appendColumn;

document.getElementById('appendRow').onclick = appendRow;



