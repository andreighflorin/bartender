import useFetch from '../hooks/useFetch'
import { useData } from '../hooks/useData'
import './OrderList.css'

export default function Dashboard() {

  let url = 'http://localhost:3001/api';
  useFetch(url);

  const {data} = useData();

  if (data && data.length === 0) {
    return <h2 className="page-title">No orders available...</h2>;
  }

  return (
    <div className="order-list">
      <h2 className="page-title">All completed orders</h2>
      {data && data.map((item, index) => (
          <div className="card" key={index}>
            <p>Customer number: {item.orderNumber}</p>
            <h3>Drink type: {item.drinkType}</h3>
          </div>
      ))}
    </div>
  )
  
}