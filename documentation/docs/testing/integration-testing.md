---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

## Use Case 1 - Custom Widgets
The user wants to view a custom widget on their current mirror layout.
The user:
1. Opens the companion app.
2. Navigates to the Widget section of the app.
3. Presses the Add New Widget button.
4. Selects a stock-related widget from the list of widgets available.
5. Chooses which sub-profile and where on the mirror the widget shall be added.
6. Saves their progress.
7. Walks up to the mirror to turn the mirror on.
8. Observes the mirror reflecting the user's changes.

## Assertions
- The stock-related Widget shall appears in the selected sub-profile's widget list.
- The Widget shall be placed in the correct position on the mirror.
