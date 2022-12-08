import './GlobalStyles.scss'
import {Provider} from 'react-redux'
import store from '../../redux/store';
import APIDefault from '../APIDefault';
function GlobalStyles({children}) {
    return (
        <div className='global'>
            <Provider store={store}>
                <APIDefault/>
                {children}
            </Provider>
        </div>
    );
}

export default GlobalStyles;