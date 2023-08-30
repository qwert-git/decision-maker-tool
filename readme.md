# Criteria and Options Assessment Tool

## Overview

This is a simple single-page application for assessing various options based on different criteria. It utilizes HTML, CSS, and JavaScript along with the Bootstrap library to provide a minimalistic yet functional user interface.

## Features

- Add new criteria (rows) and options (columns) dynamically.
- Edit criteria and options directly within the table.
- Delete specific criteria or options.
- Automatically update and display the maximum value for each criterion based on the entered assessments.

## How to Use

1. **Add Criteria**: Click on the "Add Row" button to add a new criterion.
2. **Add Option**: Click on the "Add Column" button to add a new option.
3. **Edit**: Click on the cell that you want to edit. The cells are editable, allowing you to change criteria names, option names, and values.
4. **Delete**: Each criterion and option comes with a '✕' button beside it. Clicking this button will remove the criterion or option from the table.

## Dependencies

- Bootstrap 4.5.2

## Code Structure

- `HTML`: The structure of the page including the table and buttons.
- `CSS`: Styles to make the UI more user-friendly. Uses a gradient background and other basic styles.
- `JavaScript`: Handles the logic for adding/deleting rows and columns, editing cells, and calculating maximum values.

## Installation

Since this is a simple HTML file with embedded CSS and JavaScript, no specific installation steps are needed. Simply open the HTML file in a web browser.