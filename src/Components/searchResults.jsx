const SearchResults = props => (

    <div>{console.log(props)}
      <div>
         </div>   
         <div>
      <div className="row" ><h4 style={{margin:"auto", marginBottom:"15px"}}>Search Results</h4></div>
      <table className="table table-striped">
        <thead>
          <tr>
            {props.labels.map(label => ( <th key={label.Id}>{label.DisplayName}</th>))}
          </tr>
        </thead>
        <tbody>
  
  { props.contracts.map((contract, i) => (
  
      <tr key={i} data-id={contract.Id}  
          onClick={(e) => {props.handleContract(contract.Fields.filter(field => field.DataField === "IDXT001").map(field => field.DataValue))}}
          className="clickable-row"
          target="_blank"
          >
          {contract.Fields.map( docs =>  
          <td key={docs.Id}><span id={docs.DataField}>{docs.DataValue}</span></td>)}
      </tr>))}
  
        </tbody>
      </table>
      </div>
  </div>
  )

  export default SearchResults;