import fs from 'fs';

export default function handler(req, res) {
    // Define sample data to write to the CSV file
    // const data = [
    //   ['Name', 'Age', 'City'],
    //   ['John Doe', '30', 'New York'],
    //   ['Jane Smith', '25', 'San Francisco'],
    //   ['Bob Johnson', '45', 'Los Angeles'],
    // ];
    
    const {data} = req.body
  
    let csvContent = "";

    data.forEach((row) => {
      let rowString = row.map((cell) => {
        let escapedCell = cell.replace(/"/g, '""');
        return `"${escapedCell}"`;
      }).join(",");
      csvContent += rowString + "\r\n";
    });
  
    res.setHeader("Content-Disposition", "attachment; filename=data.csv");
    res.setHeader("Content-Type", "text/csv");
    res.status(200).send(csvContent);
  }