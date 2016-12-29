let Board = React.createClass({

    getInitialState(){
        return {arr:[],value:''};
    },
    handleChange(event){
            //event事件对象 target 事件源（是真实的DOM对象）
      var value =event.target.value;
            this.setState({value:value});
},
    handleClick(){
        this.state.arr.push(this.state.value);
        this.setState({arr:this.state.arr});
    },
 render(){

     return (
         <div className="panel panel-default">
             <div className="panel-heading">
                <h1>珠峰留言版</h1>
             </div>
             <div className="panel-body">
                <ul className="list-group">
                    {
                        this.state.arr.map((item,index)=>{
                            return <li key={index} className={"list-group-item "}>{item}</li>
                        })
                    }
                </ul>
             </div>
             <div className="panel-footer">
                 <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}/>
                 <button className="btn btn-primary" onClick={this.handleClick}>留言</button>
             </div>
         </div>
     )
 }
});
ReactDOM.render(<Board/>,document.querySelector('#container'));