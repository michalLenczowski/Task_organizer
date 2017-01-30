const InputGroup=React.createClass({	
	
	onAdd:function(){		
		this.props.actions.addList()
		
	},
	onRemove:function(){		
		this.props.actions.removeListAll()
		
	},

	render:function(){

		return (
			<div>	
				<input type="button" value="Add task" className="btn btn-success" id="add_task" onClick={this.onAdd}/><br/><br/>
				<input type="button"  value="Remove all tasks" className="btn btn-danger" id="add_task" onClick={this.onRemove}/>	
			</div>	
	
	)}
	})	
