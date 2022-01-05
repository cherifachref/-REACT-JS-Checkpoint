import 'bootstrap/dist/css/bootstrap.min.css';
import Cards01 from './component/Cards01';
import Form01 from './component/Form01';
import Navbar01 from './component/Navbar01';

function App() {
  
  
  return (
    <div className="App" style={{backgroundColor: '#BCA8A4'}}>
      <div style={{textAlign:'center', backgroundColor: 'orange'}}><h1>framework JavaScript React Angular Vue</h1></div>
      <Navbar01/>
        <div style={{display:'flex' ,justifyContent:'space-between',flexWrap: 'wrap' }}>
        <Cards01/><Cards01/><Cards01/><Cards01/>
        </div>
        <Form01/>
      
      
    </div>
  );
}

export default App;
