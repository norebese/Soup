import {icon} from '../../assets';
import styles from "./mypage.module.css";
import { useNavigate } from 'react-router-dom';

const myPageUser = () =>{

    return (
        <div className={styles.body_container}>
          <div className="header">
            <div className="null"></div>
            <div className="logo">
              <img src="" alt="logo" />
            </div>
            <div className="alert">
              <img src="" alt="alert" />
            </div>
          </div>
          <div className="div_container">
            <div className="card-container">
              <div className="card-2area"></div>
              <div className="card-1area"></div>
              <div className="card-1area"></div>
              <div className="card-2area"></div>
              <div className="card-2area"></div>
            </div>
          </div>
          <div className="footer">
            <div className="menu">■</div>
            <div className="menu">■</div>
            <div className="menu">■</div>
          </div>
        </div>
      );
}


export default myPageUser