import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data})=>{
	const elem = data.map(item =>{
		const {id, ...itemProps} = item;
		return (
			<EmployersListItem key={id} {...itemProps}/> //name={item.name} salary={item.salary} сокращенно {...item}
		)
	})
	console.log(elem);
	 return(
		<ul className="app-list list-group">
			{elem}
		</ul>
	)
}
export default EmployersList;