
import {Link} from 'react-router-dom'
import './styles.css';

const Page = ()=>{
    return(
    <nav>
        <ul>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
    )
}
export default Page;