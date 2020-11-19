import React from "react";

function ResultList(props) {

  return (
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Profile Pic</th>
      <th scope="col">#</th>
      <th scope="col" onClick={props.handleSort}><button>First</button></th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
      {props.results.map((result, index) => {
       return  (

        <tr key={index}>
          <td>
            <img alt="picture" src={result.picture.thumbnail}/>
          </td>
          <td>
            {result.cell}
          </td>
          <td>{/* <img alt={result.title} className="img-fluid" src={result.images.original.url} /> */
          result.name.first}
          </td>
          <td>{result.name.last}</td>
          <td>
            {result.email}
          </td>
          {/* <td>{result.name.last}</td>
          <td>{result.name.last}</td> */}
        </tr>
      )})}
      </tbody>
      </table>
  );
}

export default ResultList;
