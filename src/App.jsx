import { useEffect, useRef, useState } from 'react'
import './App.css'
import jsonDataFromSheet from "./utils/spreadsheetData.json";
import { Input, InputGroup } from 'reactstrap';


function App() {
  const [jsonData, setJsonData] = useState([]);
  const [query, setQuery] = useState("");
  const hasPageBeenRendered = useRef(null);

  const fetchAndSetJSONData = (jsonData) => {
    const dataInFormat = jsonData;
    console.log({dataInFormat: dataInFormat})
    setJsonData(dataInFormat);
  };

  const filterJSONData = (query) => {
    const newJsonData = jsonDataFromSheet.filter((val) => {
      return val.toLowerCase().includes(query.toLowerCase());
    });
    setJsonData(newJsonData);
    setQuery(query)
  }

  useEffect(() => {
    fetchAndSetJSONData(jsonDataFromSheet);
  }, []); 

  useEffect(() => {
    hasPageBeenRendered.current && filterJSONData(query);
    hasPageBeenRendered.current = true;
  },[query])

   return (
     <div>
       <h1>JSON Data</h1>
       <InputGroup>
         <Input
           type="text"
           placeholder="Search..."
           value={query}
           onChange={(newVal) => setQuery(newVal.target.value)}
         />
       </InputGroup>
       {Object.keys(jsonData).length !== 0 &&
         Object.keys(jsonData).map((key, index) => (
           <li key={index}>{jsonData[key]}</li>
         ))}
     </div>
   );
}

export default App
