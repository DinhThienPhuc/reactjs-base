// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom";

/**
 * Silent console report
 */

// const original = console;

// beforeEach(() => {
//   console.error = jest.fn();
//   console.log = jest.fn();
//   console.warn = jest.fn();
// });

// afterEach(() => {
//   console.error = original.error;
//   console.log = original.log;
//   console.warn = original.warn;
// });
