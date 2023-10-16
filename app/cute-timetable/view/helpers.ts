"use client";

/**
 *Removes umwanted quotes and removes blank rows from CSV String
 *@param {!string} csvString -the raw CSV string to be cleaned
 *@returns {string} -The cleaned CSV string
 */

export function cleanCSVString(rawCSVString:string): string {
  // Split the CSV into an array of rows
  const rows = rawCSVString.split("\n");

  // Initialize an array to store the cleaned rows
  const cleanedRows = [];

  // Iterate through the rows
  for (const row of rows) {
    // Remove the redundant quotation marks
    let cleanedRow = row.replace(/"/g, "");

    // Removce empty rows
    if (cleanedRow.trim() !== "") {
      cleanedRows.push(cleanedRow);
    }
  }

  // Join the cleaned rows into a single CSV string
  const cleanedCSVString = cleanedRows.join("\n");

  return cleanedCSVString;
}
/**
   @function
   @param {string} cleanCSVString - cleaned CSV string containing the timetable data
   @returns {Array} - Array of parsed objects, each containing properties like 'code', 'title', 'instructor' and 'days'
   @description - This function takes in a CSV string and returns an array of parsed objects.
   The function splits the CSV into an array of rows, extracts field indices and iterates through the rows starting from the second row.
   For each row, it splits the row into an array of values and creates a new object with the extracted values.
   The object has properties like 'code', 'title', 'instructor', 'days' and 'color'.
   Each day object has properties 'name' and 'timestamps'
   */

export function getCourses(cleanCSVString:string): Array<any> {
  // Split the CSV into an array of rows
  const rows = cleanCSVString.split("\n");
  // Initialize an array to store the parsed objects
  const parsedObjects = [];

  const fieldIndices = getFieldIndices(rows[0]) as any;
  // Iterate through the rows, starting at the second row (since the first row contains the field names)
  for (let i = 1; i < rows.length; i++) {
    // Split the row into an array of values
    const values = rows[i].split(",");

    // Create a new object with the code and days fields
    const parsedObject = {
      code: values[fieldIndices["Course Code"]],
      title: values[fieldIndices["Course Title"]],
      instructor: values[fieldIndices["Instructor"]],
      option: values[fieldIndices["Option"]],
      venue: values[fieldIndices["Venue"]],
      location: values[fieldIndices["Location"]],
      building: values[fieldIndices["Building"]],
      days: [
        values[fieldIndices["Mo"]] === "true"
          ? { name: "Mo", timestamps: { start: values[0], end: values[1] } }
          : null,
        values[fieldIndices["Tu"]] === "true"
          ? { name: "Tu", timestamps: { start: values[0], end: values[1] } }
          : null,
        values[fieldIndices["We"]] === "true"
          ? { name: "We", timestamps: { start: values[0], end: values[1] } }
          : null,
        values[fieldIndices["Th"]] === "true"
          ? { name: "Th", timestamps: { start: values[0], end: values[1] } }
          : null,
        values[fieldIndices["Fr"]] === "true"
          ? { name: "Fr", timestamps: { start: values[0], end: values[1] } }
          : null,
        values[fieldIndices["Sa"]] === "true"
          ? { name: "Sa", timestamps: { start: values[0], end: values[1] } }
          : null,
        values[fieldIndices["Su"]] === "true"
          ? { name: "Su", timestamps: { start: values[0], end: values[1] } }
          : null,
      ].filter((day) => day !== null),
    } as any
    parsedObject.color = `  --color-course-${i}`;
    // Push the object to the array
    parsedObjects.push(parsedObject);
  }
  return parsedObjects;
}
/**
@function
@param {string} headerLine - The first line of the clean CSV file, containing the field names
@returns {Object} - An object containing the indices of each header in the headerline
@description - This function takes in a header line of the CSV file and returns an object that maps the field name to their indices.
It splits the header line into fields, loops through the fields and creates a map, where each field name is a key and its index is the value.
*/

export function getFieldIndices(headerLine: string): object {
  // Split the header line into fields
  const headerFields = headerLine.split(",");
  // Create a map of field indices
  const fieldIndices = {} as any;
  for (let i = 0; i < headerFields.length; i++) {
    fieldIndices[headerFields[i].trim()] = i;
  }

  return fieldIndices;
}
