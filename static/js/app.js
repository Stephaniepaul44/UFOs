// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      });
    });
  }
// 1. Create a variable to keep track of all the filters as an object.
var filters = {};


// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
      let date = d3.select("#datetime");
      //console.log(date);
      let city = d3.select("#city");
      //console.log(city);
      let state = d3.select("#state");
      //console.log(state);
      let country = d3.select("#country");
      //console.log(country);
      let shape = d3.select("#shape");
      //console.log(shape);

    // 4b. Save the value that was changed as a variable.
      let dateValue = date.property("value");
      console.log(dateValue);
      let cityValue = city.property("value");
      console.log(cityValue);
      let stateValue = state.property("value");
      console.log(stateValue)
      let countryValue = country.property("value");
      console.log(countryValue);
      let shapeValue = shape.property("value");
      console.log(shapeValue);

    // 4c. Save the id of the filter that was changed as a variable.

      let dateID = date.attr("id");
      console.log(dateID);
      let cityID = city.attr("id");
      console.log(cityID);
      let stateID = state.attr("id");
      console.log(stateID);
      let countryID = country.attr("id");
      console.log(countryID);
      let shapeID = shape.attr("id");
      console.log(shapeID);

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
      if (dateValue) {
        filters[dateID] = dateValue;
      }
      else  {
        delete filters[dateID]
    
      }
      if (cityValue) {
        filters[cityID] = cityValue;
      }
      else  {
        delete filters[cityID];
      }

      if (stateValue) {
        filters[stateID] = stateValue;
      }
      else  {
        delete filters[stateID];
      }

      if (countryValue) {
        filters[countryID] = countryValue;
      }
      else  {
        delete filters[countryID];
      }

      if (shapeValue) {
        filters[shapeID] = shapeValue;
      }
      else  {
        delete filters[shapeID];
      }

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }

  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    var filterData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    for (const [key, value] of Object.entries(filters)) {
      console.log(`${key}: ${value}`)

      filterData = filterData.filter(row => row[key]===value);

    }
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filterData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#datetime").on("change", updateFilters);
  d3.selectAll("#city").on("change", updateFilters);
  d3.selectAll("#state").on("change", updateFilters);
  d3.selectAll("#country").on("change", updateFilters);
  d3.selectAll("#shape").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);