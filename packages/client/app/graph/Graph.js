import React, { Component } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { Button, Tile } from 'carbon-components-react';

const Number = ({}) => (
  <div className="bx--col">
    <Tile>+{Math.random()*18}%</Tile>
  </div>
);

const LineGraph = ({}) => {
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ];

  return (
    <div className="c-graph">
      <LineChart width={730} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

class Graph extends Component {
  componentDidMount() {
    // fetch('/get_tags_stats')
  }

  render() {
      return (
        <div className="bx--grid">
          <div className="bx--tile-container">
            <div className="bx--row">
              <div className="bx--col bx--col-md-12">
                <LineGraph/>
              </div>
            </div>
            <div className="bx--row">
              <Number />
              <Number />
              <Number />
            </div>
          </div>
        </div>
      )
  }
}


export default Graph;
