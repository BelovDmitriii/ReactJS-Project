import React from 'react'; 
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
    <div className = 'app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render = {() => <DialogsContainer />} />
          <Route path ="/profile" render = {() => <Profile />} />
          <Route path ="/users" render = {() => <UsersContainer />} />
          <Route path ="/news" component = {() => <News />} />
          <Route path ="/music" component = {() => <Music />} />
          <Route path ="/settings" component = {() => <Settings />} />
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;