import { useNavigate } from "react-router-dom";
import './Form.css'

export default function Form() {

  let navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const addOrderForm = document.querySelector('#addOrder');
    const errorDiv = document.querySelector('.error');
    let orderNumber = addOrderForm.number.value.trim();
    let drinkType = addOrderForm.drinksOptions.value;
    validateForm(orderNumber, drinkType, errorDiv);
    addOrderForm.reset();
  }

  const validateForm = (orderNumber, drinkType, errorDiv) => {

    const patternNumber = /^[0-9]*$/;

    if (!orderNumber.length > 0 || !patternNumber.test(orderNumber)) {
      errorDiv.innerHTML += `<span>Invalid customer number</span><br/>`;
    }

    if (!drinkType) {
      errorDiv.innerHTML += `<span>You forgot to select your drink</span><br/>`;
    }

    if (orderNumber && patternNumber.test(orderNumber) && drinkType) {
      const order = {orderNumber, drinkType};
      errorDiv.innerHTML = "";

      fetch('http://localhost:3001/add' , {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    }
  }

  return (
    <div className="create">
      <h2 className="page-title">Place new order</h2>
        <form id="addOrder" action="/add" method="POST">
          <div className="row">
            <label>
              <span>Customer number:</span>
              <input type="text" placeholder="#" name="number" />
            </label>
          </div>
          <div className="row">
          <label>
            <span>Drink type:</span>
            <select name="drinks" id="drinksOptions">
              <option value="">Choose your drink</option>
              <option value="Beer">Beer</option>
              <option value="Drink">Drink</option>
            </select>
          </label>
          </div>
          <button type="submit" className="btn" onClick={e => handleSubmit(e)}>Place order</button>
        </form>
        <div className="error"></div>
        <p className="back" onClick={() => {navigate('/')}}>Back to homepage</p>
    </div>
  )
  
}