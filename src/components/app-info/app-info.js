import './app-info.css';

const AppInfo = (props) =>{
	

	return (
		<div className="app-info">
			<h1>Учет сотрудников в компаниии {props.number()}</h1>
			<h2>Общее число сотрудников </h2>
			<h2>Премию получат: {props.prize()}</h2>
		</div>
	)
}

export default AppInfo;