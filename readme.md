# Assessment Table Project

## Overview

This project provides a single-page application for assessing different options based on various criteria. It allows you to add and remove both options and criteria, edit their names, and automatically calculates and displays maximum values for each criterion as well as a coefficient based on the option values and weights for each row.

## Features

- **Add New Criteria**: You can dynamically add new rows to the table to represent different criteria.
- **Add New Options**: You can dynamically add new columns to the table to represent different options.
- **Edit Names**: The names for both options and criteria are editable.
- **Delete Specific Criteria or Options**: Each criterion and option has a delete button for removal.
- **Maximum Value Display**: Each row includes a cell that displays the maximum value among the options for that criterion.
- **Coefficient Calculation**: Each option has a corresponding "Coef" column, which is calculated based on the maximum value in the row and the weight of the row.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- jQuery
- Bootstrap

## How to Use

1. **Adding Criteria**: Click on the 'Add Criteria' button below the table to add a new row for criteria assessment.
  
2. **Adding Options**: Click on the 'Add Option' button to add a new column for assessing different options.

3. **Editing Names**: To edit the name of any criteria or option, click on the name; it's editable.

4. **Assigning Values**: Click inside any table cell under an option and enter a numerical value for assessment.

5. **Deleting Criteria or Options**: To delete any specific criteria or option, click the '✕' button next to its name.

6. **View Max Value and Coefficient**: The 'Max Value' and 'Coef' columns update automatically based on the values you enter for each option.

7. **Sorting and Filtering**: Currently, there is no sorting or filtering functionality. However, you are free to manually adjust values and the calculations update automatically.

## How to Run

1. Clone the repository to your local machine.
2. Open `index.html` in your preferred web browser.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License

MIT

## Credits

Developed by Aganur Ahundov.
