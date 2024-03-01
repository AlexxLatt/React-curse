
import './app-filter.css';

const AppFilter = ()=>{
	return (
		<div className="btn-group">
			<button 
			className="btn btn-Light"
			type="button">Все сотрудники
			</button>

			<button 
			className="btn btn-outline-Light"
			type="button">На повышение
			</button>

			<button 
			className="btn  btn-outline-Light"
			type="button">З/П больше 1000$
			</button>

		</div>
	)
}
export default AppFilter;