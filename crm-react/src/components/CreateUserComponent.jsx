import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            email: '',
            net_worth: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNetWorthHandler = this.changeNetWorthHandler.bind(this);
        this.saveOrUpdateuser = this.saveOrUpdateuser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({name: user.name,
                    email: user.email,
                    net_worth : user.net_worth
                });
            });
        }        
    }
    saveOrUpdateuser = (e) => {
        e.preventDefault();
        let user = {name: this.state.name, email: this.state.email, net_worth: this.state.net_worth};
        console.log('user => ' + JSON.stringify(user));

        // step 5
        if(this.state.id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/users');
            });
        }else{
            UserService.updateUser(user, this.state.id).then( res => {
                this.props.history.push('/users');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeNetWorthHandler= (event) => {
        this.setState({net_worth: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add user</h3>
        }else{
            return <h3 className="text-center">Update user</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Net Worth: </label>
                                            <input placeholder="Net Worth" name="net_worth" className="form-control" 
                                                value={this.state.net_worth} onChange={this.changeNetWorthHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateuser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateUserComponent
