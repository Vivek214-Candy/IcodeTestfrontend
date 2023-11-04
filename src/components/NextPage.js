import React, { useState, useEffect } from 'react'
import Grid from './Grid'
import "./NextPage.css"
import JsonObject from "./data.json"
import { downloadExcel } from "react-export-table-to-excel";
import * as XLSX from "xlsx";
import { AddData } from './Crud';
import axios from 'axios';


function NextPage() {


  const [jsonData, setJsonData] = useState(JsonObject)
  const [header, setHeader] = useState([])
  const [excelData, setExcelData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/employees");
        setJsonData(response.data);
        setHeader(Object.keys(jsonData[0]))

      } catch (error) {
        console.error('Error fetching data:', error);

      }
    }
    fetchData();
  }, []);


  function handleDownloadExcel() {
    console.log(jsonData)
    downloadExcel({
      fileName: "orgData",
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        body: jsonData,
      },
    });
  }



  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parseData = XLSX.utils.sheet_to_json(sheet);
      setExcelData(parseData);
      console.log(parseData)

    }

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    let isExcel = true;
    try {
      console.log(excelData);
      // Send a POST request to your server's endpoint
      const response = await AddData(excelData, isExcel);
      console.log('Data submitted:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };


  return (
    <>
      <h2>Template Screen</h2>

      <div>
        <button className='buttons' onClick={handleDownloadExcel} >Download Template</button>

        <span>
          <input type="file" accept='.xlsx, .xls' onChange={handleFileUpload} className='inputButton' />

          <button className='buttons' onClick={handleSubmit} >Upload Template</button>

        </span>
      </div>

      <div className=''>
        <Grid JsonObjects={jsonData} />
      </div>
    </>
  );
};

export default NextPage