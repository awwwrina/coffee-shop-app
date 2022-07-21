import { useDispatch, useSelector } from 'react-redux';
import { activeFilterChanged } from '../filters/filtersSlice';
const Dropdown = () => {
    const {filters} = useSelector(state => state.filters);
    const dispatch = useDispatch();
    
    return(
        <form>
                <select 
                    className='coffee-cards dropdown'
                    onChange={(e) => dispatch(activeFilterChanged(e.target.value))}>
                    {
                        filters.map((item, i) => {
                            return(
                                <option 
                                    key={i}
                                    value={item.filter}>
                                    {item.filter}
                                </option>
                            )
                        })}
                </select>
        </form>
    )
}

export default Dropdown;