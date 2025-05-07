import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

function SheetDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sheetUrl =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSKgwiM6XY9T1Tlx0EamsRdBeceY63Z7l0u2Q4IQ2vf0Yb9PyIloAZ1rPeny7B4isQwLXNgQt7V5BOH/pub?output=csv'; // Replace with your actual CSV URL

    // Function to fetch and parse the CSV data
    const fetchData = () => {
      fetch(sheetUrl)
        .then((res) => res.text()) // Get the CSV as text
        .then((csv) => {
          Papa.parse(csv, {
            header: true,  // Use the first row as headers
            skipEmptyLines: true,  // Skip empty lines
            complete: (results) => {
              setData(results.data); // Set the data to state
            },
          });
        })
        .catch((error) => console.error('Error fetching data:', error));
    };

    fetchData(); // Initial fetch when component mounts

    const interval = setInterval(fetchData, 30000); // Auto-refresh every 30 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array to only run once on mount

  return (
    <div>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {data.length > 0 && (
            <tr>
              {Object.keys(data[0]).map((key, index) => (
                <th key={index} style={{ padding: '8px', backgroundColor: '#f4f4f4', color: 'black' }}>
                  {key}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((cell, j) => (
                <td key={j} style={{ padding: '8px', textAlign: 'center' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SheetDisplay;
