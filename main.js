
let columnCount = 2;
let rowCount = 0;

function addRow() {
    const table = document.getElementById('assessmentTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(-1);
    rowCount++;

    const criteriaCell = newRow.insertCell(0);
    const criteriaSpan = document.createElement('span');
    criteriaSpan.innerHTML = `Criteria ${rowCount}`;
    criteriaSpan.className = "editable";
    criteriaSpan.contentEditable = "true";
    criteriaCell.appendChild(criteriaSpan);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete delete-row';
    deleteButton.textContent = '✕';
    deleteButton.addEventListener('click', deleteSpecificRow);
    criteriaCell.appendChild(deleteButton);

    const maxCell = newRow.insertCell(1);
    maxCell.innerHTML = `0`;
    maxCell.id = `maxRow${rowCount}`;

    for (let i = 2; i < columnCount; i++) {
        const cell = newRow.insertCell(i);
        cell.contentEditable = "true";
        cell.innerHTML = '0';

        cell.addEventListener('input', function () {
            updateMaxValue(newRow);
        });
    }

    newRow.id = rowCount;
}

function addColumn() {
    const table = document.getElementById('assessmentTable');
    const headerRow = table.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0];
    columnCount++;
    const newHeaderCell = document.createElement("th");

    const newHeaderSpan = document.createElement("span");
    newHeaderSpan.innerHTML = `Option ${columnCount - 2}`;
    newHeaderSpan.className = "editable";
    newHeaderSpan.contentEditable = "true";
    newHeaderCell.appendChild(newHeaderSpan);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete delete-column';
    deleteButton.textContent = '✕';
    deleteButton.addEventListener('click', deleteSpecificColumn);
    newHeaderCell.appendChild(deleteButton);

    headerRow.appendChild(newHeaderCell);

    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        const cell = rows[i].insertCell(-1);
        cell.contentEditable = "true";

        cell.addEventListener('input', function () {
            updateMaxValue(rows[i]);
        });
    }
}

function updateMaxValue(row) {
    const cells = row.getElementsByTagName('td');
    let maxVal = Number.NEGATIVE_INFINITY;

    for (let i = 2; i < cells.length; i++) {
        console.log(cells[i].innerText)
        const val = parseFloat(cells[i].innerText);
        if (!isNaN(val) && val > maxVal) {
            maxVal = val;
        }
    }

    console.log(row);
    const maxCell = row.getElementsByTagName(`td`)[1];
    console.log(maxCell);
    console.log(maxVal)
    if (maxVal === Number.NEGATIVE_INFINITY) {
        maxCell.innerText = '0';
    } else {
        maxCell.innerText = maxVal;
    }
}

function deleteSpecificRow(event) {
    const row = event.target.closest('tr');
    if (row) {
        row.remove();
        rowCount--;
    }
}

function deleteSpecificColumn(event) {
    const cell = event.target.closest('th');
    if (cell) {
        const index = cell.cellIndex;
        const table = document.getElementById('assessmentTable');
        const rows = table.rows;

        columnCount--;
        for (let i = 0; i < rows.length; i++) {
            rows[i].deleteCell(index);
            if (i > 0)
                updateMaxValue(rows[i]);
        }
    }
}