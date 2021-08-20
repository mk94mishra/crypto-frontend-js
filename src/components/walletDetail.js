import React from 'react';
import axios from 'axios';
import styles from './app.module.css';

export default class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walletAccount: '',
      walletBalance: null,
      walletEthBalance:null
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('accessToken');

    // get reciever account
    axios.get(`http://127.0.0.1:8081/api/wallet`,{headers: {'Authorization': `Bearer ${token}`}})
    .then(res => {
      console.log(res.data.data)

      if(!res.data.data.account){
        window.location.replace("/wallet");
      }
      
      this.setState({
        walletAccount: res.data.data.account,
        walletBalance: res.data.data.balance,
        walletEthBalance: res.data.data.eth_balance
      });
    })
  }

  render() {
    return (
        <div className={styles.center}>
          
          <h1 className={styles.header} >Wallet</h1>
        <p><b>Account:</b> {this.state.walletAccount}</p>
        <p><b>Balance:</b> {this.state.walletBalance} PST</p>
        <p><b>ETH Balance:</b> {this.state.walletEthBalance} ETH</p>
        </div>
    );
  }
}
