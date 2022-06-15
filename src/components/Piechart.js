import React, { useCallback, useState } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts'

const taxDistribution = [
  // { name: 'Tax', value: 10, fill: '#FFD93A' },
  { name: 'Marketing', value: 6, fill: '#FFD93A' },
  { name: 'LP', value: 4, fill: '#D5B84F' },
]

const tokenDistribution = [
  {name : "Staking", value: 50, fill:"#FFC91C"},
  {name: "Burn",  value: 39, fill:"#FFD93A"},
  {name:"Launch", value: 11, fill:"#D5B84F"},
]


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 5) * cos
  const sy = cy + (outerRadius + 5) * sin
  const mx = cx + (outerRadius + 15) * cos
  const my = cy + (outerRadius + 15) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 4}
        outerRadius={outerRadius + 8}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#fff"
      >{`${value}%`}</text>
    </g>
  )
}
export default function Piechart() {
  const [tokenIndex, setTokenIndex] = useState(0)
  const onTokenEnter = useCallback(
    (_, index) => {
      setTokenIndex(index)
    },
    [setTokenIndex],
  )

  const [tokendisIndex, setTokenDisIndex] = useState(0)
  const onDisEnter = useCallback(
    (_, index) => {
      setTokenDisIndex(index)
    },
    [setTokenDisIndex],
  )

  
  
  return (
    <div>
      <div className="w-100 h-50">
        <div
          className="row w-100"
          style={{ marginTop: '-100px', marginBottom: '50px' }}
        >
          <div className="col-md-6">
          <h5 style={{marginTop:"50px", textAlign:"center", color:"#fff"}}>Tax Distribution</h5>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  activeIndex={tokenIndex}
                  activeShape={renderActiveShape}
                  data={taxDistribution}
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  onMouseEnter={onTokenEnter}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="col-md-6">
          <h5 style={{marginTop:"50px", textAlign:"center", color:"#fff"}}>Token Distribution</h5>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  activeIndex={tokendisIndex}
                  activeShape={renderActiveShape}
                  data={tokenDistribution}
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  onMouseEnter={onDisEnter}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
