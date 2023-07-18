// Your task is to create a table for displaying the points of IPL Season 2022.
// The data is provided in this API endpoint: https://my-json-server.typicode.com/FreSauce/json-ipl/data.

// Use a script to fetch the data from the given API endpoint. Sort the data fetched in ascending order based on the NRR value of each team. Display the sorted data in the table.

// The table should have 8 columns and 11 rows (10 + 1, including the header row).
// Use the thead and tbody to distinguish between the header rows and body rows. And use th for header cells.

let tbody = document.getElementsByTagName("tbody")[0];

console.log(tbody)

fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        data
            .sort((a, b) => a.NRR - b.NRR)
            .forEach((team) => {
                // console.log(team)
                let tr = document.createElement('tr');
                Object.keys(team).forEach((key) => {
                    let td = document.createElement('td');
                    td.textContent = team[key];
                    tr.appendChild(td);
                })

                tbody.appendChild(tr);
            })
        // console.log(data)
    })



