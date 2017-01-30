const Time=React.createClass({
	getInitialState:function(){
		return this.props.store.state;

	},

	componentDidMount:function(){
		AppState.addListener((state)=>{
			this.setState({
				time:state.time	
			})
		})
	
	},

	setTime:function(e){
		let time=e.target.value;
		this.props.actions.setTime(time)
	},
	
	render:function(){
		return (
			<div className="form-group">
				<div className="col-md-1">
					<label className="control-label">Time</label>
				</div>
				
				<div className="col-md-10">
					<input type="text"  id="add_hour" className="form-control" onChange={this.setTime} required placeholder="08:00" />
				</div>

			</div>

		)
}
})
