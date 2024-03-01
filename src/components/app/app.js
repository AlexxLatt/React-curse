import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import "./app.css";
import EmployersListItem from "../employers-list-item/employers-list-item";
import EmployersList from "../employers-list/employers-list";
import EmploersAddForm from "../employers-add-form/employers-add-form";
function App (){
	const  data =[
		{name:'John1' ,salary: 2800 , increase: true, id: 1},
		{name:'Bob2' ,salary: 1800, increase: false, id: 2},
		{name:'John3' ,salary: 544800, increase: true, id: 3}
	]; 
	return (
		<div className="app">
			<AppInfo/>

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>

			</div>
			<EmployersList data = {data}/>
			<EmploersAddForm/>
		</div>
	);

	
}

export default App;