import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function KothDetails() {
  const [transaction, setTransaction] = useState([])

  return (
    <div>
      <div className="container koth-main">
        <div className="koth-details">
          <div className="showWinner">
            {/* <div className="showWallet">
              <span className="showDetails">Wallet Address :</span>{' '}
              <a href="/" className="wallet-address-link">
                xxxxx00000000000000000000000000
              </a>
            </div>
            <div className="ktoh-other-details">
              <span className="showDetails">Winning Amount : </span>{' '}
              <span className="winner-details">200k</span> <br />
            </div> */}
            <div className="current-sell-tax">
              <span className="showDetails">Sell Tax During KOTH : </span>{' '}
              <span className="winner-details">20%</span>
            </div>
             <div className='mt-3'>
                  <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                    <Table sx={{ minWidth: 100 }} aria-label="simple table">
                      <TableHead className='fw-bold'>
                        <TableRow>
                          <TableCell align="right" className='fw-bold'>Winner</TableCell>
                          <TableCell align="right" className='fw-bold'>Amount</TableCell>
                          <TableCell align="right" className='fw-bold'>Time</TableCell>
                          
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {transaction && transaction.map((row) => (
                          <TableRow
                            key={row.name}
                          >
                            <TableCell align="right">{row.Winner}</TableCell>
                            <TableCell align="right">{row.Amount}</TableCell>
                            <TableCell align="right">{row.Time}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
               </div>
          </div>
        </div>
      </div>
    </div>
  )
}
