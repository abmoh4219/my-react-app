/* 
     // from the App.jsx class
     import UserGreeting from "./Conditional_Rendering/UserGreeting.jsx";

     function App() {
          return(
           <>
            <UserGreeting isLogedIn={true} userName='abmoh' />
          </>

  
         );
    }

     export default App
*/

import styles from "./User.module.css";

function UserGreeting(props){
    return ( props.isLogedIn ?  <h2 className={styles["welcome-message"]}>Welcome {props.userName}</h2> :
                                <h2 className={stylesstyles["login-prompt"]}>Please login to continue </h2>       
    );
}
 
export default UserGreeting;