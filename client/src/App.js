import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreateCrewmate from './pages/CreateCrewmate'
import EditCrewmate from './pages/EditCrewmate'
import Home from './components/Home'
import SideNav from './components/SideNav';

import {useState, useEffect} from 'react';
import {supabase} from '../src/client'


const App = () => {
  
  const[crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await supabase.from('Crewmate')
      .select()
      .order('created_at', {ascending: true})
      setCrewmate(data)
    }
    fetchData()
  })

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<Home />
    },
    {
      path: "/gallery",
      element:<ReadPosts data={crewmate}/>
    },
    {
      path:"/edit/:id",
      element: <EditCrewmate data={crewmate} />
    },
    {
      path:"/new",
      element: <CreateCrewmate />
    }
  ]);

  return ( 

    <div className="App">
        <div>
        <SideNav />
        </div>
        <div>
        {element}
        </div>
    </div>

  );
}

export default App;
