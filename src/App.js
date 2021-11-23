import { useEffect, useState } from 'react';
import './App.css';
import { CSVLink} from 'react-csv';
const balance = require('crypto-balances-2')
const csvHeaders = [
  { label:"Coin", key:"coin"},
  { label:"Address", key:"address"},
  { label:"Balance", key:"balance"},
]

function App() {
  const [coinsSet, setCoinsSet] = useState([])
  const [error, setError] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [ coin, setCoin ] = useState(null)
  const [ address, setAddress ] = useState('')
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
    setLoading(true)
    try {
      const data = await balance(address, coin)
      console.log(data)
      if(data.error){
        setError('Such address not found')
      } else {
        let coin = data.address_type
        let balance = data.balances[coin]
        setAddressData([{coin, address, balance}, ...addressData])
        setError(null)
      }
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  return (
    <div className="App">
    <div className="container">
    {
      loading && <div className="loader"><div class="css-loader"><div></div><div></div><div></div></div></div> 
    }
    {
      !loading && error && <p className="error">{error}</p>
    }


    <form className="form">
        <select className="form__select" onChange={(e) => setCoin(e.target.value)} value={coin}>
          <option value={null}>Choose coin</option>
          {
            coinsSet.map( coin => <option key={coin.id}>{coin.ticker}</option> )
          } 
        </select>
        <input type="text" className="form__address" onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Enter your address" />
        <input type="submit" className="form__submit" onClick={getBalance} value="Get Balance" />
      </form>

        
      {
        addressData.length>0 && <div className="wallets">
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

          <CSVLink className="download" filename="balance" headers={csvHeaders} data={addressData}>Download CSV</CSVLink>
        </div>
      }


    </div>

    </div>
  );
}

export default App;
