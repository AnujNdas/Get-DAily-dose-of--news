import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export class App extends Component {
  apikey =  process.env.REACT_APP_NEWS_API
  state = {
    Progress : 0,
    
  }
  setProgress = (Progress)=>{
    this.setState({
      Progress : Progress
    })
  }
  render() {
    return (
      <div>
        
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.Progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress = {this.setProgress} key="general" country="in" apikey={this.apikey}  category="General" heading="General-News" />} />
            <Route exact path='/business' element={<News setProgress = {this.setProgress} key="business" country="in" apikey={this.apikey}  category="Business" heading="Business-News" />} />
            <Route exact path='/entertainment' element={<News setProgress = {this.setProgress} key="entertainment" country="in" apikey={this.apikey}  category="Entertainment" heading="Entertainment-News" />} />
            <Route exact path='/science' element={<News setProgress = {this.setProgress} key="science" country="in" apikey={this.apikey}  category="Science" heading="Science-News" />} />
            <Route exact path='/technology' element={<News setProgress = {this.setProgress} key="technology" country="in" apikey={this.apikey}  category="Technology" heading="Technology_News" />} />
            <Route exact path='/sports' element={<News setProgress = {this.setProgress} key="sports" country="in" apikey={this.apikey}  category="Sports" heading="Sports-News" />} />
            <Route exact path='/general' element={<News setProgress = {this.setProgress} key="general" apikey = {this.apikey} category="General" heading="General-News" />} />
            <Route exact path='/health' element={<News setProgress = {this.setProgress} key="health" country="in" apikey={this.apikey}  category="Health" heading="Health-News" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

