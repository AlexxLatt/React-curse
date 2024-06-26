import "./employers-add-form.css";
import { Component } from "react";

class EmploersAddForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            name : '',
            salary :0

        };
    }

    onValueChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render () {

        const {name, salary} = this.state;
        const {onCreate} = this.props;

        	return(
		 <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
           	     className="add-form d-flex"
                 onSubmit={(e)=>{e.preventDefault()}}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name="name"
                    value={name}
                    onChange={this.onValueChange} />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name="salary" 
                    value={salary}       
                    onChange={this.onValueChange} />

                <button type="submit"
                        className="btn btn-outline-light"
                        onClick={()=>onCreate(name,salary)}>Добавить</button>
            </form>
        </div>
	)
    }
}
export default EmploersAddForm;