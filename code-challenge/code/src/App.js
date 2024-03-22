import './App.css';

// Code Challenge 1 //
// Function to extract initials from an array of full names
function extractInitials(names) {
  // Using the map method to iterate over each name in the array
  return names.map(name => {
    // Splitting the name into first name and last name using space (' ') as a delimiter
    const [firstName, lastName] = name.split(' ');
    // Returning the initials by taking the first character of the first name and last name
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  });
}

// Array of full names
const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
// Extracting initials from full names using the extractInitials function
const initialsArray = extractInitials(fullNames);
// Logging the array of initials to the console
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']


// Code Challenge 2 //
// Function to filter objects in an array based on a specific property and value
function filterByProperty(objects, propertyName, propertyValue) {
  // Using the filter method to create a new array containing only the objects with the specified property and value
  return objects.filter(obj => obj[propertyName] === propertyValue);
}

// Array of objects with properties like name, age, and country
const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

// Filtering objects in the 'people' array where the 'country' property is 'USA'
const filteredByCountry = filterByProperty(people, 'country', 'USA');
// Logging the filtered array of objects to the console
console.log(filteredByCountry); // This will display the objects where the 'country' is 'USA'





function App() {
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
