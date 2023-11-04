import React from 'react'


function Grid(props) {

  const headers = Object.keys(props.JsonObjects[0]);
   const JsonObject=props.JsonObjects;
 
  return (
    <>
      { JsonObject.length > 0 && (
      <table className="grid">
        <thead className="gridItems">
          <tr >
            {headers.map((header, index) => (
              <th className={headers} key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {JsonObject.map((data, index) => (
            <tr key={index}>
              {headers.map((header, innerIndex) => (
                <td key={innerIndex}>{data[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      )}
    </>
  )
}



export default Grid;
