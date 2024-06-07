
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FirstPage from './Kid Dental/Pages/FirstPage';
import Dental_Home from './Kid Dental/Pages/Dental_Home';
import Dental_About from './Kid Dental/Pages/Dental_About';
import Dental_services from './Kid Dental/Pages/Dental_services';
import Dental_ContactUs from './Kid Dental/Pages/Dental_ContactUs';
import Mind_Home from './Mind Wellness/Pages/Mind_Home';
import Mind_Services from './Mind Wellness/Pages/Mind_Services';
import Mind_About from './Mind Wellness/Pages/Mind_About';
import Mind_ContactUs from './Mind Wellness/Pages/Mind_ContactUs';
import Mind_Appointment from './Mind Wellness/Pages/Mind_Appointment';
import Infor_Accordian from  './Mind Wellness/Components/Infor_Accordian'
import FAQ from './Mind Wellness/Components/FAQ';
import Information from './Mind Wellness/Components/Information';



function App() {
  
  return (
    <div className="App">
  <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/Dental_Home' element={<Dental_Home/>}/>
        <Route path='/Dental_About' element={<Dental_About/>}/>
        <Route path='/Dental_services' element={<Dental_services/>}/>
        <Route path='/Dental_ContactUs' element={<Dental_ContactUs/>}/>
        <Route path='/Mind_Home' element={<Mind_Home/>}/>
        <Route path='/Mind_About' element={<Mind_About/>}/>
        <Route path='/Mind_Services' element={<Mind_Services/>}/>
        <Route path='/Mind_ContactUs' element={<Mind_ContactUs/>}/>
        <Route path='/Mind_Appointment' element={<Mind_Appointment/>}/>
  </Routes>

       </div>
      
     
  );
}

export default App;
