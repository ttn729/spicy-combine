import xlsx from 'xlsx';

export default function handler(req, res) { 
  const {data} = req.body;

  // Create a new workbook
  const workbook = xlsx.utils.book_new();

  // Convert the data to a worksheet
  const worksheet = xlsx.utils.aoa_to_sheet(data);

  // Add the worksheet to the workbook
  xlsx.utils.book_append_sheet(workbook, worksheet);

  // Convert the workbook to a buffer
  const buffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'buffer' });

  // Set the content type and attachment header
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=data.xlsx');

  // Send the buffer as the response body
  res.send(buffer);
}
