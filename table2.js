function createTable(event){
    event.preventDefault(); //to stop page reload 
    const element = document.getElementById("elements").value
    const inputs = element.split('#')
    const table = document.getElementById("table");
    table.setAttribute("border", 2)
let number = parseInt(inputs[2]);
let row = parseInt(inputs[0]);
let col = parseInt(inputs[1]);

let startRow =0
let endRow = row 
let startCol=0
let endCol = col
for (let i = startRow; i < endRow ; i++) {
  const tr = table.insertRow();
  for (let j = startCol; j < endCol ; j++) {
    let td= document.createElement("td")
    td.textContent = ""
    tr.appendChild(td);
  }
table.appendChild(tr)
}
while(startCol < endCol){
     const tr = table.insertRow();
  for(let j=0 ; j < endRow  ; j++){
    table.rows[j].cells[startCol].textContent = (j +1) * number
}
number++
  startCol++
} 

}