
const reservedColumnsCount = 2;

let columnCount = reservedColumnsCount;
let rowCount = 0;

// Main function to add a row
function addRow() {
    rowCount++;

    const criteriaCell = createCriteriaCell();
    const maxCell = $('<td>').attr('id', `maxRow${rowCount}`).text('0');

    const newRow = $('<tr>').attr('id', rowCount);;
    newRow.append(criteriaCell);
    newRow.append(maxCell);

    for (let i = reservedColumnsCount; i < columnCount; i++) {
        const cell = createOptionCell(newRow);
        newRow.append(cell);
    }

    $('#assessmentTable tbody').append(newRow);
}

// Main function to add a column
function addColumn() {
    columnCount++;

    addOptionHeader();

    const rows = $('#assessmentTable tbody tr');
    rows.each(function() {
        const cell = createOptionCell($(this));
        $(this).append(cell);
    });
}

// Function to create header cell with delete button
function addOptionHeader() {
    const headerRow = $('#assessmentTable thead tr');

    const newHeaderSpan = createEditableCell(`New Option`);
        
    const deleteButton = $('<button>')
        .addClass('delete delete-column')
        .text('✕')
        .click(deleteSpecificColumn);

    const newHeaderCell = $('<th>')
        .append(newHeaderSpan)
        .append(deleteButton);

    headerRow.append(newHeaderCell);
}

function createOptionCell(row) {
    var cell = $('<td>')
        .attr('contenteditable', 'true')
        .text('0')
        .on('input', function () {
            updateMaxValue(row);
        });

    return cell;
}

function createEditableCell(text) {
    return $('<span>').addClass('editable').attr('contenteditable', 'true').text(text);
}

function createCriteriaCell()
{
    const criteriaSpan = createEditableCell(`Criteria ${rowCount}`);
    const deleteButton = $('<button>').addClass('delete delete-row').text('✕').click(deleteSpecificRow);

    const criteriaCell = $('<td>');
    criteriaCell.append(criteriaSpan);
    criteriaCell.append(deleteButton);

    return criteriaCell;
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