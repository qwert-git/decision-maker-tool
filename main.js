
const reservedColumnsCount = 3;

let columnCount = reservedColumnsCount;
let rowCount = 0;

// Main function to add a row
function addRow() {
    rowCount++;

    const criteriaCell = createCriteriaCell();
    const weightCell = $('<td>');
    weightCell.append(createEditableSpan('1'));
    const maxCell = $('<td>').attr('id', `maxRow${rowCount}`).text('0');

    const newRow = $('<tr>').attr('id', rowCount);
    newRow.append(criteriaCell);
    newRow.append(weightCell);
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

    const newHeaderSpan = createEditableSpan(`New Option`);
        
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

function createEditableSpan(text) {
    return $('<span>').addClass('editable').attr('contenteditable', 'true').text(text);
}

function createCriteriaCell()
{
    const criteriaSpan = createEditableSpan(`Criteria ${rowCount}`);
    const deleteButton = $('<button>').addClass('delete delete-row').text('✕').click(deleteSpecificRow);

    const criteriaCell = $('<td>');
    criteriaCell.append(criteriaSpan);
    criteriaCell.append(deleteButton);

    return criteriaCell;
}

function updateMaxValue(row) {
    let maxVal = Number.NEGATIVE_INFINITY;
    
    // Iterate through cells starting from index 3
    row.find('td:gt(2)').each(function() {
        const val = parseFloat($(this).text());
        if (!isNaN(val) && val > maxVal) {
            maxVal = val;
        }
    });

    // Update the max value in the second cell (index 1) of the row
    const maxCell = row.find('td').eq(2);

    if (maxVal === Number.NEGATIVE_INFINITY) {
        maxCell.text('0');
    } else {
        maxCell.text(maxVal);
    }
}

function deleteSpecificRow(event) {
    const row = $(event.target).closest('tr');
    if (row.length) {
        row.remove();
        rowCount--;
    }
}

function deleteSpecificColumn(event) {
    const cell = $(event.target).closest('th');
    if (cell.length) {
        const index = cell.index();
        const table = $('#assessmentTable');
        
        columnCount--;

        table.find('tr').each(function() {
            $(this).find('td, th').eq(index).remove();
            updateMaxValue($(this));
        });
    }
}