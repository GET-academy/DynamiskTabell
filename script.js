const tblWidth = 6;
const tblHeight = 6;
//var tabelArray = new Array(tblWidth, tblHeight);

function generateTable() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tableBody");
    
    for (let i = 0; i < tblHeight; i++) {
        const row = document.createElement("tr");
        
        for (let j = 0; j < tblWidth; j++) {
            const cell = document.createElement("td");
            cell.appendChild(document.createTextNode(`${i}, ${j}`));
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }
    
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
}

generateTable();
