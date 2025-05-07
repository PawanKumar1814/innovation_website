import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { gapi } from "gapi-script";
import "../styles/admin-page.css";

const AdminDashboard = () => {
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [selectedRows, setSelectedRows] = useState({});
  const [filteredCsv, setFilteredCsv] = useState([]);

  useEffect(() => {
    gapi.load("client:auth2", initClient);
  }, []);

  const initClient = () => {
    gapi.client
      .init({
        apiKey: "AIzaSyDwqSAN10-I-H5EsA95MlHaOJ0EhrU8gLk", // Your API key
        clientId: "8819934373-kilm7j2g7n057dvt2pr8o506mu95vkbr.apps.googleusercontent.com", // Your OAuth 2.0 Client ID
        scope: "https://www.googleapis.com/auth/spreadsheets",
        discoveryDocs: [
          "https://sheets.googleapis.com/$discovery/rest?version=v4",
        ],
      })
      .then(() => {
        console.log("Google API client initialized.");
      })
      .catch((err) => {
        console.error("Error initializing GAPI client", err);
      });
  };

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setCsvData(results.data);
        setHeaders(results.meta.fields || []);
        const initialSelection = {};
        results.data.forEach((_, index) => {
          initialSelection[index] = false;
        });
        setSelectedRows(initialSelection);
        setFilteredCsv([]);
      },
    });
  };

  const toggleRowSelection = (index) => {
    setSelectedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSubmit = () => {
    const filtered = csvData.filter((_, index) => selectedRows[index]);
    setFilteredCsv(filtered);
  };

  const uploadToGoogleSheet = () => {
    if (!filteredCsv.length) return alert("No rows selected");

    const sheetData = filteredCsv.map((row) => Object.values(row));
    const spreadsheetId = "1KpnVQmieFzDZqvTK3LyDm1Xv-0TZ4YsUFT8wSwg2Lg0"; // Your Sheet ID
    const range = "Sheet1!A1";

    gapi.auth2.getAuthInstance().signIn().then(() => {
      gapi.client.sheets.spreadsheets.values
        .append({
          spreadsheetId,
          range,
          valueInputOption: "RAW",
          resource: {
            values: sheetData,
          },
        })
        .then((response) => {
          alert("Data uploaded to Google Sheets successfully!");
        })
        .catch((error) => {
          console.error("Upload error:", error);
          alert("Failed to upload data to Google Sheets.");
        });
    });
  };

  return (
    <div className="admin-dashboard">
      <header className="top-bar">
        <h1 className="dashboard-title">Admin Dashboard</h1>
      </header>

      <main className="dashboard-content">
        <div className="upload-section">
          <h2>Upload CSV File</h2>
          <input type="file" accept=".csv" onChange={handleCSVUpload} />
        </div>

        {csvData.length > 0 && (
          <div className="csv-preview">
            <h3>CSV Preview (first 2 columns)</h3>
            <table>
              <thead>
                <tr>
                  <th>{headers[0]}</th>
                  <th>{headers[1]}</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, index) => (
                  <tr key={index}>
                    <td>{row[headers[0]]}</td>
                    <td>{row[headers[1]]}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedRows[index] || false}
                        onChange={() => toggleRowSelection(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="card-button" onClick={handleSubmit}>
              Submit Selection
            </button>
          </div>
        )}

        {filteredCsv.length > 0 && (
          <div className="submit-section">
            <h3>Ready to Upload</h3>
            <p>{filteredCsv.length} rows selected.</p>
            <button className="card-button" onClick={uploadToGoogleSheet}>
              Upload to Google Sheets
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;