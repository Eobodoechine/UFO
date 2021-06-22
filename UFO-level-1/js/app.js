// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// table creation
function newtable(data){
  tbody.html("");
  data.forEach((inf) => {
    var rowz = tbody.append("tr");
    Object.values(inf).forEach((tad) => {
      var cellz = rowz.append("td");
      cellz.text(tad);
    });
  });
}
function search(){
  // Prevents the Page from Refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputdate = d3.select("#datetime");
  // Get the value property of the input element
  var input = inputdate.property("value");
  var filterdata=tableData
  if(input) {
      filterdata = filterdata.filter(yoyo => yoyo.datetime === input);
  }
  newtable(filterdata);
}
// Select the button
var button = d3.select("#filter-btn");
// Create event handlers for clicking the button or pressing the enter key
button.on("click", search);
newtable(tableData);