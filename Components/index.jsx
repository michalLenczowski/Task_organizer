const Apka=React.createClass({
	getInitialState:function(){
		return this.props.store.state;
	},
	componentDidMount:function(){
		this.props.store.addListener((state)=>{
			this.setState({				
				task_number:state.task_number,
				home_list:state.home_list,
				work_list:state.work_list,
				other_list:state.other_list,
				name:state.name,
				time:state.time,
				category:state.category			
			})
		})
	},
	render:function(props){
	return(
		<div className="container">
			<div className="col-md-4">
				<div id="menu">
					<p className="text-center">TASKS TO FINISH:</p>
					<div className="text-center" id="task_numb">
						<p>{AppState.state.task_number}</p>
					</div>
					<p className="text-center">NEW TASK:</p>

					<Textarea  store={AppState} actions={actions}/><br/>

					<Time  store={AppState} data={data} actions={actions}/>
					<br/><br/>
					 <Category  store={AppState} data={data} actions={actions}/>
					<br/><br/>					
					
					<InputGroup actions={actions} store={AppState}/>
					
				</div>	
			</div>

			<div className="col-md-5">			
				<Nav store={AppState} />		
			</div>
		</div>	
	)}	
})

ReactDOM.render(<Apka store={AppState} actions={actions}/>,document.getElementById('program'))
