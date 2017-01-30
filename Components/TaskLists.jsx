var Home=function(props){
	var data=props.data;
	return (
		<div className="col-md-10">
            <table >
              <thead></thead>
                <tbody>
                  {AppState.state.home_list.map((index,i)=>
                	<tr >
                    <td className="index">{i+1}.  </td>
                    <td className="name">{index.name}</td>
                    <td className="date">{index.date}</td>
                    <td id="actions" className="glyphicon glyphicon-trash" onClick={(index)=>actions.removeList(index)}></td>
                </tr>)}
               </tbody>
              </table>  
          </div>
	)
}

var Work=function(props){
	var data=props.data;
	return	(
		<div className="col-md-10">
            <table >
              <thead></thead>
                <tbody>
                  {AppState.state.work_list.map((index,i)=>
                  <tr >
                    <td className="index">{i+1}.  </td>
                    <td className="name">{index.name}</td>
                    <td className="date">{index.date}</td>
                    <td id="actions" className="glyphicon glyphicon-trash" onClick={(index)=>actions.removeList(index)}></td>
                </tr>)}
               </tbody>
              </table>  
          </div>


	)		
}

var Other=function(props){
	var data=props.data;
	return (
		<div className="col-md-10">
            <table >
              <thead></thead>
                <tbody>
                  {AppState.state.other_list.map((index,i)=>
                  <tr >
                    <td className="index">{i+1}.  </td>
                    <td className="name">{index.name}</td>
                    <td className="date">{index.date}</td>
                    <td id="actions" className="glyphicon glyphicon-trash" onClick={(index)=>actions.removeList(index)}></td>
                </tr>)}
               </tbody>
              </table>  
          </div>
	)
}
