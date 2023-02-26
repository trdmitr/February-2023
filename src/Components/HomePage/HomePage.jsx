import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import classes from "./HomePage.module.css"
import "../UI/Mobile.css"

class HomePage extends Component {

    render() {
    const imgUrl = "https://sun9-76.userapi.com/impg/ull4a6y8NgGtBPSKyyPnaFGWxpnqEja99GyDlA/4-0VjdbF040.jpg?size=1240x1289&quality=96&sign=6dc4032c290fbb5029b90a0f86460cd7&type=album"
    const imgAlt = "Каверы Подземки"
    const frontAudio = "https://drive.google.com/uc?export=download&id=1uNmg51HFdA3aI84AtgWYAuM_rTnqoZyS";
    const imgTzi = "https://sun9-40.userapi.com/impg/MISALnCzbtAXGdxwXPqulc-f9a-JzHxkZHjYnA/UcHxUh-CRM8.jpg?size=600x200&quality=96&sign=c367e03fe8e4d86e0f7fb657fd7ba0e3&type=album"
      return (
      <div className="device device-iphone-x">
      <div className="device-frame">
        <div className="device-content">

        <div>
        <Link to={"/cavers"}
         className={classes.navLink}>Слушаем!</Link>
        
        <div className= {classes.main}>
          
  <div className= {classes.article}><p >💥23 февраля!💥</p></div>
  <div className= {classes.article}><img src={imgUrl} width={100} alt={imgAlt} /></div>
  <div className= {classes.article}><audio controls src={frontAudio} type="audio/mpeg" /></div>
  
  <div className= {classes.article}><img  style={{ marginTop:"1em"}} src={imgTzi} width={100} alt="Каверы Подземки" /> </div>
</div>
      </div>
        </div>
      </div>
      <div className="device-stripe"></div>
      <div className="device-header">
        <div className="device-sensors"></div>
      </div>
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </div>
      
      
    );
  }
}

  export default HomePage