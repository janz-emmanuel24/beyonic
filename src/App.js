// import logo from './logo.svg';
import React, {Component} from 'react'
// import './App.css';
import TotalAmount from './TotalAmount'

// const TotalAmount = ({totalAmount}) => {
//   return (
//     <div className='Total'>
//           <h4>Total amount:</h4>
//           <div>
//           <span>{totalAmount}</span>
//           </div>
//     </div>
//   )
// };

class App extends Component {

  state = {
    quantity: 1,
    unitprice: 80000,
    totalprice: 0
  }

  componentDidMount() {
   
    this.getAmount()
  }

  getAmount = () => {
    setTimeout(() => {
      const totalprice = this.state.quantity * this.state.unitprice
      this.setState({totalprice: totalprice})
    }, 1000)
  }

  handleDecrease = (e) => {
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1
    }))

    this.getAmount()

  }

  handleIncrease = (e) => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1
    }))

    this.getAmount()
  }


  render() {
     return (
      <div className="App">
        <div className='Header'>
          <div className='NavBar'>
            <span className='Logo'>
              Beyonic Logo here
            </span>
          </div>
        </div>
        <hr></hr>
        <div className='Content'>
          <div className='PayLink'>
            Payment Link
          </div>
          <div className='Description'>
            <h5>Link Details</h5>
            <h3>BYOB WORKSHOP</h3>
            <p>Career workshop '23 - unlocking your networking potential masterclasss, workshop and conference event..</p>
          </div>
          <div className='unitAmountInfo'>
            <div className='unitAmount'>
              <h5>Unit Amount</h5>
              <div>
                {this.state.unitprice}
              </div>
            </div>
            <div className='Quantity'>
              <h5>Quantity</h5>
              <div>
                <span className='decrease' onClick={this.handleDecrease}>
                  -
                </span>
                <span className='totalQuantity'>
                  {this.state.quantity}
                </span>
                <span className='decrease' onClick={this.handleIncrease}>
                  +
                </span>
              </div>
            </div>
            <div className='Total'>
              <h4>Total amount:</h4>
              <div>
                <span className='total_amount'>{this.state.totalprice}</span>
              </div>
            </div>
            <hr></hr>
            <div className='PayBtn'>
              <button>Proceed to pay</button>
            </div>
          </div>
        </div>
      </div>
  );
  }
}

export default App;
