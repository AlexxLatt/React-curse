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
					{name:'John3' ,salary: 544800, increase: false, rise: false, id: 3}
				],
				term:'',
				filter:'all'
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

	onUpdateSearch =(term)=>{
		this.setState({term});
	}
	searchEmp = (items,term)=>{
		if (term.length===0){
			return items;
		}
		return items.filter(item=>{
			return item.name.indexOf(term) > -1  // indexOf находит кусочки имени которое мы вписали (> - 1 тут прикол в том что -1 озночает что мы ничего не нашли поэтому ишем больше чем -1 )
		});
	}

	addItem = (name, salary) => {
    
	if(name===''|| salary===''){
		return;
	}
	
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

	filterPost = (items , filter)=>{
		// eslint-disable-next-line default-case
		switch(filter){
			case 'rise':
				return items.filter(item => item.rise);
			case 'moreThen10000':
				return items.filter(item =>item.salary > 1000)
			default:
				return items;
		}
	}

	onFilterSelect = (filter)=>{
		this.setState({filter});
	}
	
	render() {
		 const {data , term, filter} = this.state;
		 const visibelData =this.filterPost(this.searchEmp(data, term), filter);
		return (

		 
			<div className="app">
				<AppInfo  number={this.number}
				prize={this.prize}/>

				<div className="search-panel">
				<SearchPanel
				onUpdateSearch={this.onUpdateSearch}/>
				<AppFilter filter={filter}
				onFilterSelect={this.onFilterSelect}/>

				</div>	
					<EmployersList data = {visibelData}
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