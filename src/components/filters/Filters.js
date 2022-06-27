import { useDispatch, useSelector } from 'react-redux';
import { activeFilterChanged } from './filtersSlice';
import './filters.scss';

const Filters = () => {
	const dispatch = useDispatch();

	const {filters, activeFilter} = useSelector(state => state.filters);
	const filterClasses = "filter__country";



	return (
		<>
			<ul className="filter">

				{filters.map((item, i) => {
					return(
						<li 
							className={item.filter === activeFilter ? `${filterClasses} ${filterClasses}_active` : filterClasses}
							key={i}
							onClick={() => dispatch(activeFilterChanged(item.filter))}>{item.filter}</li>
					)
				})}
            </ul>
		</>
  	)
}

export default Filters;