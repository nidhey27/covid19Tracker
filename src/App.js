import React from 'react';

import { Cards, CountryPicker, Charts } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';



class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    
    this.setState({ data, country: country });
   
    console.log(data);
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src ="https://i.ibb.co/7QpKsCX/image.png" />
        <h3>-Powered By Nycto Nid</h3>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} /> 
      </div>
    );
  }
}

export default App;