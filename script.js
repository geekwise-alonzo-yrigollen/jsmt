var numLength = 0;
function createTableElement(numCols, numRows) {
  var table = document.createElement('table');
  for (var r = 0; r < numRows; r++) {
      var row = document.createElement('tr');
      row.className += ' row';
      for (var c = 0; c < numCols; c++) {
          var cell = document.createElement('td');
          cell.className += ' cell';
          row.appendChild(cell);
          numLength++;
      }
      table.appendChild(row);
  }
  return table;
}
//shift 16 cntrl 17 mouse left 0 mouse right 2
function addClass(element, classname) {
element.classname += ' ' + classname;
}

function addConsoleLogOnClickEvent(element, number) {
  element.onclick = function () {
      console.log("CLICKED");
  };
}

function addEvent(table) {
var cells = table.getElementsByTagName('td');
for(var i = 0; i < numLength; i++) {
  addConsoleLogOnClickEvent(this);
  cells[i].onclick = function () {
    if(event.ctrlKey){
      this.style.backgroundColor = 'green';
    }
    else if(event.shiftKey){
      this.style.backgroundColor = 'blue';
    }
    else if(event.altKey){
      this.style.backgroundColor = '#fff';
    }
    else this.style.backgroundColor = 'red';
  };
}
}
var theGrid = document.getElementById("the-grid");

var theGridTable = createTableElement(40,30);

document.body.appendChild(the-grid);

addEvent(theGridTable);

for(var i = 0; i < numLength; i++) {
document.getElementsByTagName("td")[i].style.padding = "10px";
document.getElementsByTagName("td")[i].style.border = "1px solid black";
}