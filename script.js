// Function to export table data to Excel
function exportToExcel() {
    const table = document.querySelector("table");
    const rows = table.rows;
    let csvContent = '';
  
    // Loop through each row and create CSV content
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      let rowData = [];
      
      // Loop through each cell in the row
      for (let j = 0; j < row.cells.length; j++) {
        rowData.push(row.cells[j].innerText);
      }
  
      // Join row data with commas and add it to CSV content
      csvContent += rowData.join(",") + "\n";
    }
  
    // Create a Blob from the CSV content
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    
    // Create a link element for downloading
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "psr_checklist.csv"; // File name for the download
    
    // Append the link to the document, click it to trigger the download, and remove the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  // Add event listener to the export button
  document.querySelector('.export-button').addEventListener('click', exportToExcel);
  