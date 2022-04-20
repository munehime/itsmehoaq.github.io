import { Link } from 'react-router-dom';
import './style/Home.css'
function Home() {
   return (
       <div className="Home">
           <h1>ai hoi</h1>
           <Link to="/skins"><u>la toi, toi da hoi</u></Link>
       </div>
   )
}

export default Home;