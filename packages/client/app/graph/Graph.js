import React, { Component } from 'react';
import { AreaChart, Area, linearGradient, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { ClickableTile } from 'carbon-components-react';
import axios from 'axios';

let variable = 'Success';

const Number = ({legend}) => {
  const number = ((Math.random()*2 -1) * 18).toFixed(2);
  let parsedNum, className;

  if (number > 0) {
    parsedNum = `+${number}%`;
    className = 'tile-pos';
  }
  else {
    parsedNum = `${number}%`;
    className = 'tile-neg'
  }

  return (
    <div className="bx--col">
      <ClickableTile
        onClick={() => {
          variable = legend;
        }}
        className={className}
      >
        <p>
          {parsedNum}
        </p>
        <p className="tile-legend">
          {legend}
        </p>
      </ClickableTile>
    </div>
  );
}

const demoData = [
  {
    "date": "Page A",
    "Success": 4000,
    "Spend": 2400,
    "CTR": 2400
  },{
    "date": "Page B",
    "Success": 3000,
    "Spend": 2000,
    "CTR": 1800
  },{
    "date": "Page C",
    "Success": 5000,
    "Spend": 2000,
    "CTR": 1800
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

const AreaGraph = ({data}) => {
  // console.log(demoData, variable);
  return (
    <div className="c-graph">
      <AreaChart width={800} height={300} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="var1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          {/* <linearGradient id="var2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient> */}
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey={variable} stroke="#8884d8" fillOpacity={1} fill="url(#var1)" />
        {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#var2)" /> */}
    </AreaChart>
    </div>
  );
}

class Graph extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  updateData(data) {
    this.setState({ data: data });
  }

  componentDidMount() {
    const id = 2227226;
    const url = `http://localhost:5000/get_ad_stats?ad_id=${id}`;

    axios.get(url)
    .then((response) => {
      if(response.data && response.data.length) {
        const parsedData = response.data.map(d => ({
            'date': new Date(d[0]),
            'Success': d[1]/d[2],
            'Spend': d[3],
            'CTR': d[4]
          }));
        this.updateData(parsedData);
      }
    })
    .catch((error) => {
      console.warn(error);
      console.log(this);
      this.updateData(demoData);
    });
  }

  render() {
      return (
        <div className="bx--grid">
          <div className="bx--tile-container">
            <div className="bx--row">
              <div className="bx--col bx--col-md-12">
                <AreaGraph data={this.state.data}/>
              </div>
            </div>
            <div className="bx--row">
              <Number legend='Success'/>
              <Number legend='Spend'/>
              <Number legend='CTR'/>
            </div>
          </div>
        </div>
      )
  }
}


export default Graph;
