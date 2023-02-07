function createTable(event){
    event.preventDefault(); //to stop page reload 
    const element = document.getElementById("elements").value
    const inputs = element.split('#')
    const table = document.getElementById("table");
    table.setAttribute("border", 2)
let number = parseInt(inputs[2]);
let row = parseInt(inputs[0]);
let col = parseInt(inputs[1]);
if(row != col){
        alert("Enter equal row and col")
}
  let startRow =0
  let endRow = row 
  let startCol=0
  let endCol = col
  for (let i = startRow; i < endRow ; i++) {
    const tr = table.insertRow();
    for (let j = startCol; j < endCol ; j++) {
      tr.insertCell();
    }
  table.appendChild(tr)
  }
 while(startCol <= endCol && startRow <= endRow){
    // first row in right direction
    for(let i=startCol; i< endCol; i++){
        debugger;
            table.rows[startRow].cells[i].textContent = number
            number++
    }
    startRow ++
    // down column
    for(let j=startRow ; j < endRow  ; j++){
            table.rows[j].cells[endCol-1].textContent = number
            number++
    }
    endCol--
//     left bottom row
    for(let k=endCol -1 ; k > startCol ; k--){
            table.rows[endRow-1].cells[k].textContent = number
            number++
    }
    endRow--
//     upward column
    for(let l=endRow  ; l >= startRow ; l--){
            table.rows[l].cells[startCol].textContent = number
            number++
    }
    startCol++
 }

}