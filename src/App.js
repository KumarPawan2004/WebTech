import React from'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Landing from './HTMLcomponent/Landing';
import Notification from './HTMLcomponent/Notification';
import Help from './HTMLcomponent/Help';
import Overview from './HTMLcomponent/Overview';
function App() {
  return (

    <>
    <BrowserRouter>
    <Routes>
    <Route  path='/' element={<Landing  />}/>
      <Route  path='/Notification' element={<Notification  />}/>
      <Route  path='/Help' element={<Help  />}/>
      <Route path='/Overview' element={<Overview />} />
    </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;
