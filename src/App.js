import React, { Component } from 'react';
import Selector from './components/selector';
import Sidebar from './components/sidebar';
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Main from './components/main';
class App extends Component {
    render() { 
        return (
            <div className='row'>
            <Sidebar/>
            <Main/>
           </div>
        );
    }
}
 
export default App;