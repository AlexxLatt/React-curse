import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersListItem from "../employers-list-item/employers-list-item";
import EmployersList from "../employers-list/employers-list";
import EmploersAddForm from "../employers-add-form/employers-add-form";

import "./app.css";
class App extends Component{
	constructor(props){
		super(props)
		this.state={
				data :[
					{name:'John1' ,salary: 2800 , increase: true, rise: true, id: 1},
					{name:'Bob2' ,salary: 1800, increase: false, rise: false, id: 2},
					{name:'John3' ,salary: 544800, increase: true, rise: false, id: 3}
				]
		}
	}
	number= ()=>{
		return this.state.data.length;
	}
	prize = ()=>{
		const prize = this.state.data.filter(item=> item.increase).length;
		return prize;
	}
	deleteItem = (id)=>{
		this.setState(({data})=>{
			// const index =data.findIndex(elem=>elem.id === id)
			// const before =data.slice(0,index);
			// const after = data.slice(index+1);
			// const newArr = [...before, ...after];
			return{
				data: data.filter(item => item.id !==id)
			}
		})
	}
	addItem = (name, salary) => {
    const lastIndex = this.state.data.length + 1; // +1 для определения следующего индекса
    const newItem = {
        name: name,
        salary: salary,
        increase: false,
		rise: false,
        id: lastIndex
    };

    this.setState(({ data }) => {
        return {
            data: [...data, newItem]
        };
    });
	}

	onToggleProp = (id,prop)=>{
		// this.setState(({data})=>{
		// 	const index = data.findIndex(item=>item.id === id);
		// 	const old = data[index];
		// 	const newItem = {...old, increase: !old.increase};
		// 	const newArr = [...data.slice(0,index),newItem ,...data.slice(index+1)];
		// 	return{
		// 		data: newArr
		// 	}
		// })

		this.setState(({data})=>({
			data: data.map(item=>{
				if(item.id === id){
					return{...item,[prop]: !item[prop]}
				}
				return item;
			})
		}))
	}

	

	render() {
		return (
			<div className="app">
				<AppInfo  number={this.number}
				prize={this.prize}/>

				<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>

				</div>
					<EmployersList data = {this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					/>
				<EmploersAddForm
				onCreate={this.addItem}/>
			</div>
		);

	}
	
}

export default App;