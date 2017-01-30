const Nav=React.createClass({
	getInitialState:function(){
		return this.props.store.state;
	},

	
	componentDidMount:function(){
		AppState.addListener((state)=>{
			this.setState({
				home:state.home,
				work:state.work,
				other:state.other	
			})
		})
	},

	render:function(){
	return (
		<div id="task_list">
			<nav className="navbar-inverse">
				<div className="container-fluid">
					<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#" onClick={actions.setHome}>HOME</a></li>
	                    	<li><a href="#" onClick={actions.setWork}>WORK</a></li>
	                    	<li><a href="#" onClick={actions.setOther}>OTHER</a></li>
	                    </ul>
	                </div>
	            </div>
	            <table >
                <thead>
                  <tr>
                    <th className="col1">#</th>
                    <th className="col2">Task</th>
                    <th className="col3">Hour</th>
                    <th className="col4">Actions</th>
                  </tr>
                </thead>
                <tbody id="tasklist"></tbody>
                    </table>
	        </nav><br/><br/>

        		{AppState.state.home? <Home  /> : null}

				{AppState.state.work? <Work   /> : null}

				{AppState.state.other? <Other  /> : null}

		</div>		
	)}

})
