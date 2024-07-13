import styles from "./style.module.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Header = () =>{

    return(
        <div className={styles.head_container}>
            <div/>
            <div className={styles.logo}>
            <img src="" alt="logo" />
            </div>
            <div className={styles.alert}>
            <DropdownButton id="dropdown-basic-button" title="">
            <Dropdown.Item href="#/action_1">1번</Dropdown.Item>
            <Dropdown.Item href="#/action_2">2번</Dropdown.Item>
            <Dropdown.Item href="#/action_3">3번</Dropdown.Item>
            </DropdownButton>
            </div>
        </div>
        );
}
export default Header