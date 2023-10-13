import classNames from 'classnames';
import styles from './CategoriesBar.module.css';
import Container from '../shared/Logo/Container/Container';
import Burger from '../shared/Burger/Burger';
import SearchBox from '../shared/SearchBox/SearchBox';

const CategoriesBar = () => {
    return ( <div className={classNames(styles.catBar, "h-16")}>
        <Container>
            <div className='flex justify-between items-center w-full h-full'>
                <Burger/>
               <SearchBox/>
            </div>
        </Container>
    </div> );
}
 
export default CategoriesBar;