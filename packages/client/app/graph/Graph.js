import React, { Component } from 'react';
import { AreaChart, Area, linearGradient, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { Button, Tile } from 'carbon-components-react';
import axios from 'axios';

const Number = ({legend}) => {
  const number = ((Math.random()*2 -1) * 18).toFixed(2);
  if (number > 0) {
    return (
      <div className="bx--col">
        <Tile className='tile-pos'>
          <p>
            {`+${number}%`}
          </p>
          <p className="tile-legend">
            {legend}
          </p>
        </Tile>
      </div>
    );
  }
  else {
    return (
      <div className="bx--col">
        <Tile className='tile-neg'>
        <p>
          {`${number}%`}
        </p>
        <p className="tile-legend">
          {legend}
        </p>
        </Tile>
      </div>
    );
  }
}

const demoData = [
  {
    "date": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "date": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "date": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "date": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "date": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "date": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "date": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
];

const LineGraph = ({}) => {
  return (
    <div className="c-graph">
      <LineChart width={730} height={250} data={demoData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

const AreaGraph = ({}) => {
  return (
    <div className="c-graph">
      <AreaChart width={730} height={250} data={demoData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
    </div>
  );
}

class Graph extends Component {
  componentDidMount() {
    const id = 2227226;
    const url = `localhost:5000/get_ad_stats?ad_id=${id}`;

    axios.get(url)
    .then(function (response) {
      // handle success
      console.log(typeof response);
      console.log(response);
      if(response.length) response.map(d => ({
        'date': new Date(d[0]),
        'Success': d[1]/d[2],
        'Spend': d[3],
        'CTR': d[4]
      }));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  render() {
      return (
        <div className="bx--grid">
          <div className="bx--tile-container">
            <div className="bx--row">
              <div className="bx--col bx--col-md-12">
                <AreaGraph/>
              </div>
            </div>
            <div className="bx--row">
              <Number legend='Clicks'/>
              <Number legend='Engagement'/>
              <Number legend='Clients'/>
            </div>
          </div>
        </div>
      )
  }
}


export default Graph;
