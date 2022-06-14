import React, { useCallback, useState } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts'

const tokenomics = [
  { name: 'Tax', value: 10, fill: '#FFD93A' },
  { name: 'Marketing', value: 6, fill: '#FFD93A' },
  { name: 'LP', value: 4, fill: '#D5B84F' },
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

  const [buyIndex, setBuyIndex] = useState(0)
  const onBuyEnter = useCallback(
    (_, index) => {
      setBuyIndex(index)
    },
    [setBuyIndex],
  )

  const [sellIndex, setSellIndex] = useState(0)
  const onSellEnter = useCallback(
    (_, index) => {
      setSellIndex(index)
    },
    [setSellIndex],
  )

  const [wkndIndex, setWkndIndex] = useState(0)
  const onWkndEnter = useCallback(
    (_, index) => {
      setWkndIndex(index)
    },
    [setWkndIndex],
  )
  return (
    <div>
      <div className="w-100">
        <div className="row w-100" style={{marginTop:"-100px", marginBottom:"50px"}}>
          <div className="col-md-12">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  activeIndex={tokenIndex}
                  activeShape={renderActiveShape}
                  data={tokenomics}
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  onMouseEnter={onTokenEnter}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
