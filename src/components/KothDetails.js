import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';

export default function KothDetails() {
  const [data, setData] = useState([])

  useEffect(()=>{
    setInterval(()=>{
      TableData();
    },3000)
  },[])

  const TableData =async()=>{
    axios.get("http://localhost:4000/kothwinners").then((res)=>{
      console.log(res)
      setData(res.data)
    }).catch(console.error)
  }

  return (
    <div>
      <div className="container koth-main">
        <div className="koth-details">
          <div className="showWinner">
          
            <div className="current-sell-tax text-center">
              <span className="showDetails">Sell Tax During KOTH : </span>{' '}
              <span className="winner-details">20%</span>
            </div>
            <Table responsive style={{backgroundColor:"#010101", color:"#fff",overflow:"hidden",overflowY:'scroll',Height:'100px'}} className="rounded mt-3">
              <thead>
                <tr>
                  <th>Winner</th>
                  <th>Amount</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {data.map((res)=>
                <tr>
                <td>{res.Winner}</td>
                <td>{res.Amount}</td>
                <td>{res.Time}</td>
              </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div> 
  )
}
