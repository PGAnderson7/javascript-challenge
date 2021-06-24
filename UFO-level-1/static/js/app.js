// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use d3 to update each cell's text with data values (`date/time`, `city`, `state`, `country`, `shape`, and `comment`)
function makeTable(tableData){
    var tbody = d3.select(".table").select("tbody");
    tbody.html("");
    tableData.forEach((x) => {
        var row = tbody.append("tr");
        Object.entries(x).forEach(([key, value]) => {
            // Append a cell to the row for each value in the report object
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Make table in html 
makeTable(tableData);

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");
