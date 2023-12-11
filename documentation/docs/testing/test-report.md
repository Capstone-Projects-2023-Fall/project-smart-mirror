# Test Report

## Purpose

The Test Report serves as a comprehensive record that documents the execution and results of the tests specified in the Test Procedure Document. This report provides insights into the performance and behavior of the software under test, highlighting both successful and failed test cases.

## Requirements

In addition to general documentation requirements, this Test Report includes the following components:

1. Output from Unit Test Runs
2. Manual Acceptance Test Procedures with Notations
3. List of Known Problems (Failed Tests)

## Output from Unit Test Runs

### 1. Clock Component Unit Test Results
- **Status:** PASS
- **Duration:** 17.65 seconds
- **Issues:**
  - Warning: `ReactDOM.render` is no longer supported in React 18. Suggested solution: [link](https://reactjs.org/link/switch-to-createroot)

### 2. Fitbit Component Unit Test Results
- **Status:** FAIL
- **Duration:** 19.083 seconds
- **Issues:**
  - Error fetching Fitbit data: `TypeError: Cannot read properties of undefined (reading 'ok')`
  - Error fetching data: `TypeError: Cannot read properties of undefined (reading 'ok')`
  - Error during upsert: `Column 'key' of relation 'fitbit' does not exist`
  - Fitbit API Tests:
    - `getFitBitValue` should make a GET request with parameters - `TypeError: Cannot read properties of undefined (reading 'ok')`
    - `refreshToken` should make a POST request to Fitbit token endpoint - `TypeError: Cannot read properties of undefined (reading 'ok')`
    - `upsertSupa` should upsert data into Supa DB - Expected: StringContaining "some-table", Number of calls: 0
    - `getSuper` should get data from Supa DB - Expected: StringContaining "user-id", Number of calls: 0

### 3. News Component Unit Test Results
- **Status:** Test suite failed to run
- **Issue:**
  - Cannot find module '@testing-library/jest-dom/extend-expect'

### 4. DateDisplay Component Unit Test Results
- **Status:** PASS
- **Duration:** 20.875 seconds
- **Issues:**
  - Console warning: `A function to advance timers was called but the timers APIs are not replaced with fake timers.`

### 5. Page Component Unit Test Results
- **Status:** Test suite failed to run
- **Issue:**
  - Cannot find module '../utils/supabase-client'

### 6. Spotify Component Unit Test Results
- **Status:** Test suite failed to run
- **Issue:**
  - Cannot find module './svg/spotify.svg'

### 7. Weather Component Unit Test Results
- **Status:** Test suite failed to run
- **Issues:**
  - Cannot find module './svg/cloud-bolt-svgrepo-com.svg'
  - Cannot find module './svg/cloud-rain-alt-svgrepo-com.svg'
  - Cannot find module './svg/cloud-sun-alt-svgrepo-com.svg'
  - Cannot find module './svg/clouds-svgrepo-com.svg'
  - Cannot find module './svg/sun-svgrepo-com.svg'
  - Cannot find module './svg/snow-alt-svgrepo-com.svg'
  - Cannot find module './svg/cloud-sleet-svgrepo-com.svg'
  - Cannot find module './svg/cloud-rain-svgrepo-com.svg'

## Manual Acceptance Test Procedures

- Manual acceptance test procedures were executed as specified in the documentation. Notations have been made to indicate the tests performed and the observed results.

## List of Known Problems (Failed Tests)

1. **Clock Component:**
   - Warning: `ReactDOM.render` is no longer supported in React 18.

2. **Fitbit Component:**
   - Error fetching Fitbit data: `TypeError: Cannot read properties of undefined (reading 'ok')`
   - Error fetching data: `TypeError: Cannot read properties of undefined (reading 'ok')`
   - Error during upsert: `Column 'key' of relation 'fitbit' does not exist`
   - Fitbit API Tests:
     - `getFitBitValue` should make a GET request with parameters - `TypeError: Cannot read properties of undefined (reading 'ok')`
     - `refreshToken` should make a POST request to Fitbit token endpoint - `TypeError: Cannot read properties of undefined (reading 'ok')`
     - `upsertSupa` should upsert data into Supa DB - Expected: StringContaining "some-table", Number of calls: 0
     - `getSuper` should get data from Supa DB - Expected: StringContaining "user-id", Number of calls: 0

3. **News Component:**
   - Test suite failed to run - Cannot find module '@testing-library/jest-dom/extend-expect'

4. **DateDisplay Component:**
   - Console warning: `A function to advance timers was called but the timers APIs are not replaced with fake timers.`

5. **Page Component:**
   - Test suite failed to run - Cannot find module '../utils/supabase-client'

6. **Spotify Component:**
   - Test suite failed to run - Cannot find module './svg/spotify.svg'

7. **Weather Component:**
   - Test suite failed to run for multiple modules due to missing SVG files.

This Test Report provides an overview of the test results and highlights areas that require attention for further investigation and resolution. The recommendations aim to improve the overall quality and reliability of the software under test.
