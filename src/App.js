import './App.css';
import { useEffect, useState } from 'react';
import CSVDownload from './CSVDownload';
const balance = require('crypto-balances-2')

function App() {
  const [ coinsSet, setCoinsSet ] = useState([])
  const [ error, setError ] = useState('')
  const [ fetchingBalance, setFetchingBalance ] = useState(false)
  const [ coinInput, setCoinInput ] = useState(null)
  const [ addressInput, setAddressInput ] = useState('')
  const [ addressData, setAddressData ] = useState([])

  useEffect(() => {
    fetch('https://api.coinsocialstory.com/api/v1/currencies/all-ticker')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCoinsSet(data.response)
      });
  }, [])

  const getBalance = async (e) => {
    e.preventDefault()
    setFetchingBalance(true)
    try {
      const data = await balance(addressInput, coinInput)
      if(data.error){
        setError('Such address not found')
      } else {
        let coin = data.address_type
        let balance = data.balances[coin]
        setAddressData([{coin, addressInput, balance}, ...addressData])
        setError(null)
        setAddressInput('')
      }
    } catch (error) {
      setError(error)
    }
    setFetchingBalance(false)
  }

  return (
    <div className="App">
      <div className="container">
        {
          fetchingBalance && <div className="loader"><div class="css-loader"><div></div><div></div><div></div></div></div> 
        }
        {
          !fetchingBalance && error && <p className="error">{error}</p>
        }
        <form className="form">
          <select className="form__select" onChange={(e) => setCoinInput(e.target.value)} value={coinInput}>
            <option value={null}>Choose coin</option>
            {
              coinsSet.map( coin => <option key={coin.id}>{coin.ticker}</option> )
            } 
          </select>
          <input type="text" className="form__address" onChange={(e) => setAddressInput(e.target.value)} value={addressInput} placeholder="Enter your address" />
          <input type="submit" className="form__submit" onClick={getBalance} value="Get Balance" />
        </form>
        {
          addressData.length > 0 && <div className="wallets">
            <table border={1}>
              <tr>
                <th>Coin</th>
                <th>Wallet address</th>
                <th>Current balance</th>
              </tr>
            {  
              addressData.map( wallet => <tr key={wallet.address}>
                                          <td>{wallet.coin}</td>
                                          <td>{wallet.address}</td>
                                          <td>{wallet.balance}</td>
                                        </tr> )
            }
            </table>   
            <CSVDownload data={addressData}/>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
