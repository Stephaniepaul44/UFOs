// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }
//clear the table of existing data
function buildTable(data) {
  tbody.html("");
}
//loop through each object and append a row and cells for each value in the row
data.forEach((dataRow) => {
  let row = tbody.append("tr");
//loop through each field and add each value as a table cell
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});
//grab the datetime value from the filtered 
function handleClick() {
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
// Check to see if a date was entered and filter the data using that date.
 // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
};

// Rebuild the table using the filtered data. If no date was entered, then filteredData will just be the original tableData.
  buildTable(filteredData);
};
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);