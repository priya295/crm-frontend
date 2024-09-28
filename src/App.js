

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Front from "./Admin/Components/pages/create_users";
import Users from './Admin/Components/pages/users';
import Details from './Admin/Components/pages/details';
import Filter from './Admin/Components/pages/filter_selected';
import Admin from './Admin/Components/Projects/overView';
import Staff from './Admin/Components/Staff';
import Role from './Admin/Components/roles/RoleDetails';
import NavBar from './Admin/Components/headers/NavBar';
import SideBar from './Admin/Components/headers/SideBar';
import EditForm from './Admin/Components/editForm';
import MyStaff from './Admin/Components/mystaff';
import Form from './Admin/Components/form';
import ProjectSummary from './Admin/Components/ProjectSummary';
import ProjectSettings from './Admin/Components/ProjectSettings';
import AddProject from './Admin/Components/addProject';

const App = () => {

   const [toggleSideBar , setToggleSideBar] = useState(false);

   const handleToggleSideBar = () =>{
      setToggleSideBar(!toggleSideBar)
   }

  //  function to create layout of the page
       function AdminLayout() {
            return (
              <>
              <div className="flex">
              <div className="">
            {toggleSideBar && <SideBar toggleSideBar = {toggleSideBar}/>}
            </div> 
       
         {/* container for navbar and outlet */}
         <div className={`flex flex-col flex-grow overflow-hidden`}>
           <NavBar handleToggleSideBar={handleToggleSideBar} toggleSideBar={toggleSideBar}/>
           <main className={`flex-1 overflow-x-hidden overflow-y-auto  `}>
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Outlet />
             </div>
          </main>
         </div>
       </div>
              </>
        
            )
          }
          
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
        <Route path="/" element= {<Front/>} />  
          <Route path='/users' element = {<Users/>}/>   
          {/* <Route path='/details' element = {<Details/>}/> */}
          <Route path='/filter' element = {<Filter/>}/>
          <Route path= '/admin' element = {<Admin/>}/>
          <Route path='/admin/staff' element = {<Staff/>}/>
          <Route path='/admin/role' element={<Role />} />
          <Route path='/editForm' element={<EditForm />} />
          <Route path='/mystaff' element={<MyStaff />} />

          <Route path='/addproject' element={<AddProject />} />
          <Route path='/mystaff' element={<MyStaff />} />
          <Route path='/projectsettings' element={<ProjectSettings />} />
          <Route path='/projectsummary' element={<ProjectSummary />} />
          <Route path='/form' element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



