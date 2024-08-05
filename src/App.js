import React from 'react';
import SideBar from './Components/SideBar/SideBar';
import { useRoutes } from 'react-router-dom';
import routes from './Components/routes';


function App() {
  const router=useRoutes(routes)
  return (
  <div>
    <SideBar/>
    <div className=' flex-4 pl-5 pr-[350px]'>
      
    {router}
    </div>
    
  </div>
  );
}

export default App;
