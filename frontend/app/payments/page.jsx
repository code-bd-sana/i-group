"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEdit, FaUpload, FaFileCsv, FaDownload, FaFileExport } from "react-icons/fa";

export default function PaymentsPage() {
  const [open, setOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedPaymentId, setSelectedPaymentId] = useState("");

  const openDeleteModal = (paymentId) => {
    setSelectedPaymentId(paymentId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedPaymentId("");
    setDeleteModalOpen(false);
  };

  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    paymentStatus: "All Status",
    agentSearch: "",
    paymentId: ""
  });

  const [uploadData, setUploadData] = useState({
    file: null,
    date: "",
    paymentMethod: "",
    division: "",
    amount: "",
    agentName: ""
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      startDate: "",
      endDate: "",
      paymentStatus: "All Status",
      agentSearch: "",
      paymentId: ""
    });
  };

  const handleCalendarClick = (field) => {
    const dateInput = document.querySelector(`input[type="date"][data-field="${field}"]`);
    if (dateInput) {
      dateInput.showPicker();
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      setUploadData(prev => ({
        ...prev,
        file: file
      }));
    } else {
      alert('Please select a CSV file');
    }
  };

  const handleUploadChange = (field, value) => {
    setUploadData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUploadSubmit = () => {
    if (!uploadData.file) {
      alert('Please select a CSV file to upload');
      return;
    }

    if (!uploadData.date || !uploadData.paymentMethod || !uploadData.division) {
      alert('Please fill all required fields');
      return;
    }

    console.log('Upload Data:', uploadData);
    alert('Payment data uploaded successfully!');
    setOpen(false);
    setUploadData({
      file: null,
      date: "",
      paymentMethod: "",
      division: "",
      amount: "",
      agentName: ""
    });
  };

  const handleModalClose = () => {
    setOpen(false);
    setUploadData({
      file: null,
      date: "",
      paymentMethod: "",
      division: "",
      amount: "",
      agentName: ""
    });
  };

  return (
    <div className="p-4 md:p-6 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">Payments – Donna Cozart</h1>
          <p className="text-sm text-gray-600">Agent - Cozart Insurance LLC</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-3 py-2 md:px-4 md:py-2 bg-[#2199E8] flex items-center gap-2 text-white rounded text-sm">
            <span><FaEdit/></span>
            <span>Edit Agent</span>
          </button>
        </div>
      </div>

      {/* Summary Card */}
      <div className="mt-4 md:mt-6 p-4 md:p-6 rounded-lg ">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-medium">Payments — Donna Cozart</h2>
            <p className="text-xs text-gray-500">
              View and manage all payment transactions
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-2 rounded text-sm flex items-center gap-2 bg-[#E2E8F0] hover:bg-[#D1D9E6] transition-colors">
              <FaDownload size={14}/>
              <span className="hidden sm:inline">Export CSV</span>
            </button>
            <button className="px-3 py-2 rounded text-sm bg-[#E2E8F0] flex items-center gap-2 hover:bg-[#D1D9E6] transition-colors">
              <FaFileExport size={14}/>
              <span className="hidden sm:inline">Export PDF</span>
            </button>
            <button
              className="px-3 py-2 bg-[#2199E8] text-white rounded text-sm hover:bg-[#1B82CC] transition-colors flex items-center gap-2"
              onClick={() => setOpen(true)}
            >
              <FaUpload size={14} />
              <span>Add Payment</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg b">
            <div className="h-10 w-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
              ✓
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Paid</p>
              <h3 className="text-xl md:text-2xl font-bold">$15,320</h3>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-lg  ">
            <div className="h-10 w-10 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full">
              ⟳
            </div>
            <div>
              <p className="text-gray-500 text-sm">Pending</p>
              <h3 className="text-xl md:text-2xl font-bold">$4,375</h3>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-lg ">
            <div className="h-10 w-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
              ⬜
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Transactions</p>
              <h3 className="text-xl md:text-2xl font-bold">3</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-4 md:mt-6   p-4 md:p-6  ">
        {/* FILTER BAR */}
        <div className="w-full border border-[#E2E8F0] p-4 rounded-lg bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Start Date */}
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-700">Start Date</label>
            <div className="relative mt-1">
              <input
                type="date"
                data-field="startDate"
                value={filters.startDate}
                onChange={(e) => handleFilterChange('startDate', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              />
              <span 
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                onClick={() => handleCalendarClick('startDate')}
              >
                📅
              </span>
            </div>
          </div>

          {/* End Date */}
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-700">End Date</label>
            <div className="relative mt-1">
              <input
                type="date"
                data-field="endDate"
                value={filters.endDate}
                onChange={(e) => handleFilterChange('endDate', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              />
              <span 
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                onClick={() => handleCalendarClick('endDate')}
              >
                📅
              </span>
            </div>
          </div>

          {/* Payment Status */}
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-700">Payment Status</label>
            <select 
              value={filters.paymentStatus}
              onChange={(e) => handleFilterChange('paymentStatus', e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            >
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>

          {/* Agent Search */}
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-700">Agent / Agency</label>
            <input
              type="text"
              placeholder="Search agent name..."
              value={filters.agentSearch}
              onChange={(e) => handleFilterChange('agentSearch', e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Payment ID */}
          <div className="md:col-span-1">
            <label className="text-sm font-semibold text-gray-700">Payment ID</label>
            <input
              type="text"
              placeholder="PMT-001"
              value={filters.paymentId}
              onChange={(e) => handleFilterChange('paymentId', e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex justify-end mt-3">
          <button 
            onClick={clearFilters}
            className="text-sm text-gray-600 hover:text-gray-800 underline cursor-pointer"
          >
            Clear all filters
          </button>
        </div>

        {/* TABLE - Responsive */}
        <div className="mt-4 md:mt-8 overflow-x-scroll max-w-[35vh] mx-auto sm:max-w-full ">
          <table className="text-sm w-full md:text-[15px] shadow-lg rounded-lg overflow-hidden bg-white ">
            <thead>
              <tr className="border-b bg-[#F1F5F9] border-gray-200 text-left text-gray-600">
                <th className="p-2 md:p-3 font-semibold">PAYMENT ID</th>
                <th className="p-2 md:p-3 font-semibold">AGENT NAME</th>
                <th className="p-2 md:p-3 font-semibold">DATE</th>
                <th className="p-2 md:p-3 font-semibold">AMOUNT</th>
                <th className="p-2 md:p-3 font-semibold">STATUS</th>
                <th className="p-2 md:p-3 font-semibold">METHOD</th>
                <th className="p-2 md:p-3 font-semibold">DIVISION</th>
                <th className="p-2 md:p-3 font-semibold">ACTION</th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-2 md:p-3">
                  <div className="font-medium">PMT-001</div>
                  <div className="text-gray-500 text-xs md:text-sm">TXN845233</div>
                </td>
                <td className="p-2 md:p-3">Donna Cozart</td>
                <td className="p-2 md:p-3">Sep 30, 2025</td>
                <td className="p-2 md:p-3 font-medium">$1,230</td>
                <td className="p-2 md:p-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs md:text-sm flex items-center gap-1 w-max">
                    ✓ Paid
                  </span>
                </td>
                <td className="p-2 md:p-3">Bank Transfer</td>
                <td className="p-2 md:p-3">Division 1</td>
                <td className="p-2 md:p-3 text-blue-600 flex flex-wrap gap-2">
                <Link href={`/payments/${'details'}`}>  <span className="cursor-pointer hover:text-blue-800 transition-colors text-xs md:text-sm">Info</span></Link>
       <Link href={`/payments/edit`}>
                  <span className="cursor-pointer hover:text-blue-800 transition-colors text-xs md:text-sm">Edit</span></Link>
                  <span
                    className="text-red-600 cursor-pointer hover:text-red-800 transition-colors text-xs md:text-sm"
                    onClick={() => openDeleteModal("PMT-001")}
                  >
                    Delete
                  </span>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="p-2 md:p-3">
                  <div className="font-medium">PMT-002</div>
                  <div className="text-gray-500 text-xs md:text-sm">TXN845234</div>
                </td>
                <td className="p-2 md:p-3">Frank Wang</td>
                <td className="p-2 md:p-3">Sep 30, 2025</td>
                <td className="p-2 md:p-3 font-medium">$1,230</td>
                <td className="p-2 md:p-3">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs md:text-sm flex items-center gap-1 w-max">
                    Pending
                  </span>
                </td>
                <td className="p-2 md:p-3">Check</td>
                <td className="p-2 md:p-3">Division 2</td>
                <td className="p-2 md:p-3 text-blue-600 flex flex-wrap gap-2">
                  <span className="cursor-pointer hover:text-blue-800 transition-colors text-xs md:text-sm">Info</span>
                  <span className="cursor-pointer hover:text-blue-800 transition-colors text-xs md:text-sm">Edit</span>
                  <span
                    className="text-red-600 cursor-pointer hover:text-red-800 transition-colors text-xs md:text-sm"
                    onClick={() => openDeleteModal("PMT-002")}
                  >
                    Delete
                  </span>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-2 md:p-3">
                  <div className="font-medium">PMT-003</div>
                  <div className="text-gray-500 text-xs md:text-sm">TXN845235</div>
                </td>
                <td className="p-2 md:p-3">Sarah Lopez</td>
                <td className="p-2 md:p-3">Sep 30, 2025</td>
                <td className="p-2 md:p-3 font-medium">$1,230</td>
                <td className="p-2 md:p-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs md:text-sm flex items-center gap-1 w-max">
                    ✓ Paid
                  </span>
                </td>
                <td className="p-2 md:p-3">Wire</td>
                <td className="p-2 md:p-3">Division 1</td>
                <td className="p-2 md:p-3 text-blue-600 flex flex-wrap gap-2">
                  <span className="cursor-pointer hover:text-blue-800 transition-colors text-xs md:text-sm">Info</span>
                  <span className="cursor-pointer hover:text-blue-800 transition-colors text-xs md:text-sm">Edit</span>
                  <span
                    className="text-red-600 cursor-pointer hover:text-red-800 transition-colors text-xs md:text-sm"
                    onClick={() => openDeleteModal("PMT-003")}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* UPLOAD Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 md:p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-semibold">Upload Payment Data</h2>
              <button 
                onClick={handleModalClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer text-lg"
              >
                ✕
              </button>
            </div>

            {/* Upload Section */}
            <div className="mb-4 md:mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Upload CSV File <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="csv-upload"
                />
                <label htmlFor="csv-upload" className="cursor-pointer">
                  <FaFileCsv className="mx-auto text-2xl md:text-3xl text-gray-400 mb-2" />
                  <div className="text-gray-600 text-sm md:text-base">
                    {uploadData.file ? (
                      <div className="text-green-600 font-medium">
                        ✓ {uploadData.file.name}
                      </div>
                    ) : (
                      <>
                        Drop your CSV file here or <span className="text-blue-600">click to browse</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">CSV files only, max 10MB</p>
                </label>
              </div>
            </div>

            {/* FORM FIELDS */}
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={uploadData.date}
                  onChange={(e) => handleUploadChange('date', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Payment Method <span className="text-red-500">*</span>
                </label>
                <select
                  value={uploadData.paymentMethod}
                  onChange={(e) => handleUploadChange('paymentMethod', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Payment Method</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Check">Check</option>
                  <option value="Wire">Wire</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Cash">Cash</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Division <span className="text-red-500">*</span>
                </label>
                <select
                  value={uploadData.division}
                  onChange={(e) => handleUploadChange('division', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Division</option>
                  <option value="Division 1">Division 1</option>
                  <option value="Division 2">Division 2</option>
                  <option value="Division 3">Division 3</option>
                  <option value="Division 4">Division 4</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={uploadData.amount}
                  onChange={(e) => handleUploadChange('amount', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Agent Name
                </label>
                <input
                  type="text"
                  placeholder="Enter agent name"
                  value={uploadData.agentName}
                  onChange={(e) => handleUploadChange('agentName', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* CSV Requirements */}
            <div className="mt-4 p-3 md:p-4 bg-gray-50 rounded border">
              <p className="text-sm font-medium mb-2">CSV Format Requirements</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Required columns: Agent Name, Date, Amount, Payment Method, Division</li>
                <li>• Date format: MM/DD/YYYY</li>
                <li>• Amount format: 1234.56 (NO currency symbols)</li>
                <li>• Payment Method: Bank Transfer, Check, Wire, Credit Card, Cash</li>
                <li>• Division: Division 1, Division 2, Division 3, Division 4</li>
              </ul>
            </div>

            <div className="flex justify-end gap-3 mt-4 md:mt-6">
              <button 
                className="px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors cursor-pointer text-sm md:text-base"
                onClick={handleModalClose}
              >
                Cancel
              </button>
              <button 
                className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer flex items-center gap-2 text-sm md:text-base"
                onClick={handleUploadSubmit}
              >
                <FaUpload size={14} />
                Upload Payments
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-red-600">
              ⚠️ Delete Payment
            </h2>

            <p className="mt-3 text-gray-700 text-sm md:text-base">
              Are you sure you want to delete payment <strong>{selectedPaymentId}</strong>?  
              <br />
              <span className="text-red-500 text-xs md:text-sm">This action cannot be undone.</span>
            </p>

            <div className="flex justify-end gap-3 mt-4 md:mt-6">
              <button
                className="px-3 py-2 md:px-4 md:py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm md:text-base"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
              <button
                className="px-3 py-2 md:px-4 md:py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm md:text-base"
                onClick={closeDeleteModal}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}