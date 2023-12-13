import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import { Table, TableBody, TableCell, Select, MenuItem, IconButton, Switch, TableContainer, TableHead, TableRow, Paper, Typography, Card, CardContent } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chart, ArcElement } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ArcElement, ChartDataLabels);


const tableData = [
  { campaign: 'Costmetics', clicks: 712, cost: 4272, conversions: 8, revenue: 16568 },
  { campaign: 'Serums', clicks: 3961, cost: 27331, conversions: 115, revenue: 362526 },
  { campaign: 'Facewash', clicks: 9462, cost: 76831, conversions: 123, revenue: 266800 },
  { campaign: 'Shampoos', clicks: 439, cost: 2151, conversions: 5, revenue: 11029 },
  { campaign: 'Conditioners', clicks: 1680, cost: 3864, conversions: 49, revenue: 175245 },
  { campaign: 'Facewash 2', clicks: 4978, cost: 29370, conversions: 189, revenue: 623106 },
];

const calculateTotal = () => {
  let totalClicks = 0;
  let totalCost = 0;
  let totalConversions = 0;
  let totalRevenue = 0;

  tableData.forEach((row) => {
    totalClicks += row.clicks;
    totalCost += row.cost;
    totalConversions += row.conversions;
    totalRevenue += row.revenue;
  });

  return { campaign: 'Total', clicks: totalClicks, cost: totalCost, conversions: totalConversions, revenue: totalRevenue };
};



const tableData2 = [
  { Group: 'Male', clicks: 348, cost: 12528, conversions: 42, revenue: 62118 },
  { Group: 'Female', clicks: 692, cost: 24912, conversions: 35, revenue: 5175 },
  { Group: 'Unknown', clicks: 105, cost: 3943, conversions: 3, revenue: 4489},
];

const calculateTotal2 = () => {
  let totalClicks = 0;
  let totalCost = 0;
  let totalConversions = 0;
  let totalRevenue = 0;

  tableData2.forEach((row) => {
    totalClicks += row.clicks;
    totalCost += row.cost;
    totalConversions += row.conversions;
    totalRevenue += row.revenue;
  });

  return { Group: 'Total', clicks: totalClicks, cost: totalCost, conversions: totalConversions, revenue: totalRevenue };
};

const calculateTotalMale = () => {
  let totalClicks = 0;
  tableData2.forEach((row) => {
    if (row.Group === 'Male') {
      totalClicks += row.clicks;
    }
  });
  return { Group: 'Male', clicks: totalClicks };
};

const calculateTotalFemale = () => {
  let totalClicks = 0;
  tableData2.forEach((row) => {
    if (row.Group === 'Female') {
      totalClicks += row.clicks;
    }
  });
  return { Group: 'Female', clicks: totalClicks };
};

const calculateTotalUnknown = () => {
  let totalClicks = 0;
  tableData2.forEach((row) => {
    if (row.Group === 'Unknown') {
      totalClicks += row.clicks;
    }
  });
  return { Group: 'Unknown', clicks: totalClicks };
};



const Dashboard = () => {

  const [showChart, setShowChart] = useState(true);
  const [clicksOption, setClicksOption] = useState('Clicks');
  const [sortOrder, setSortOrder] = useState({ field: null, asc: true })



  const chartData = {
    labels: ['Male', 'Female', 'Unknown'],
    datasets: [
      {
        label: 'Ad Insights',
        data: [
          calculateTotalMale().clicks,
          calculateTotalFemale().clicks,
          calculateTotalUnknown().clicks,
        ],
        backgroundColor: [
          '	rgba(255, 69, 0, 0.6)',
          'rgba(0,0,255,0.6)',
          'rgba(0, 0, 0, 0.6)',
        ],
      },
    ],
  };
  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Ad Insights',
      },
      legend: {
        display: false, 
      },
      datalabels: {
        display: false,
      },
    },
  };



  const handleSort = (field) => {
    if (sortOrder.field === field) {
      setSortOrder({ field, asc: !sortOrder.asc });
    } else {
      setSortOrder({ field, asc: true });
    }
  };

  const getSortedData = (data, field) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (sortOrder.asc) {
        return a[field] - b[field];
      } else {
        return b[field] - a[field];
      }
    });
    return sortedData;
  };

  const sortedTableData = getSortedData(tableData, sortOrder.field);


  return (
    <div>
      <NavigationBar />
      <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '20px', marginTop: '80px' }}>
        <Card style={{ width: '50%', border: '1px black' }}>
          <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '15px', paddingTop: '10px', paddingBottom: '10px', borderBottom: '1px solid grey' }}>
            <span>Ad Insights</span>
            <HelpOutlineIcon style={{ color: 'grey', marginRight: '5px' }} />

          </Typography>
          <TableContainer component={Paper}>

            <Table>
              <TableHead>
                <TableRow >
                  <TableCell style={{ fontWeight: 'bold', color: 'black' }}>Campaigns<IconButton onClick={() => handleSort('campaign')}>
                    {sortOrder.field === 'campaign' && sortOrder.asc ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton></TableCell>
                  <TableCell style={{ fontWeight: 'bold', color: 'black' }}>Clicks <IconButton onClick={() => handleSort('clicks')}>
                    {sortOrder.field === 'clicks' && sortOrder.asc ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton></TableCell>
                  <TableCell style={{ fontWeight: 'bold', color: 'black' }}>Cost  <IconButton onClick={() => handleSort('cost')}>
                    {sortOrder.field === 'cost' && sortOrder.asc ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton></TableCell>
                  <TableCell style={{ fontWeight: 'bold', color: 'black' }}>Conversions<IconButton onClick={() => handleSort('conversions')}>
                    {sortOrder.field === 'conversions' && sortOrder.asc ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton></TableCell>
                  <TableCell style={{ fontWeight: 'bold', color: 'black' }}>Revenue <IconButton onClick={() => handleSort('revenue')}>
                    {sortOrder.field === 'revenue' && sortOrder.asc ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedTableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ paddingTop: "7px", paddingBottom: '7px' }}>{row.campaign}</TableCell>
                    <TableCell style={{ paddingTop: "7px", paddingBottom: '7px' }}>{row.clicks.toLocaleString()}</TableCell>
                    <TableCell style={{ paddingTop: "7px", paddingBottom: '7px' }}>USD {row.cost.toLocaleString()}</TableCell>
                    <TableCell style={{ paddingTop: "7px", paddingBottom: '7px' }}>{row.conversions}</TableCell>
                    <TableCell style={{ paddingTop: "7px", paddingBottom: '7px' }}>USD {row.revenue.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
                {/* Total row */}
                <TableRow>
                  <TableCell >{calculateTotal().campaign}</TableCell>
                  <TableCell>{calculateTotal().clicks.toLocaleString()}</TableCell>
                  <TableCell>USD {calculateTotal().cost.toLocaleString()}</TableCell>
                  <TableCell>{calculateTotal().conversions}</TableCell>
                  <TableCell>USD {calculateTotal().revenue.toLocaleString()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

        </Card>


        <Card style={{ width: '45%' }}>
          <Typography
            variant="h6"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: '15px',
              paddingTop: '10px',
              paddingBottom: '10px',
              borderBottom: '1px solid grey',
            }}
          >
            <span> Ad Insights
            </span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {showChart ? (
                <Select
                  value={clicksOption}
                  onChange={(e) => setClicksOption(e.target.value)}
                  style={{ marginRight: '10px' }}
                  sx={{ "& .MuiOutlinedInput-input": { padding: '5px' } }}
                >
                  <MenuItem value="Clicks">Clicks</MenuItem>
                  <MenuItem value="Cost">Cost</MenuItem>
                  <MenuItem value="Conversations">Conversations</MenuItem>
                  <MenuItem value="Revenue">Revenue</MenuItem>
                </Select>) : (null)}

              <span>
                <HelpOutlineIcon style={{ color: 'grey', marginRight: '5px' }} />
              </span>
            </div>
          </Typography>

          {showChart ? (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '60%', marginTop: '50px' }}>
                <Doughnut data={chartData} options={chartOptions} height={170} width={200} />

              </div>
              <div style={{ paddingRight: '15px', marginRight: '60px', marginTop: '80px' }}>
                {chartData.labels.map((label, index) => (
                  <div key={index} style={{ marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '30px', height: '10px', backgroundColor: chartData.datasets[0].backgroundColor[index], marginRight: '5px' }}></div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

          ) : (
            <TableContainer component={Paper}>

              <Table>
                <TableHead>
                  <TableRow >
                    <TableCell style={{ fontWeight: 'bold', color: 'black' }}>Group</TableCell>
                    <TableCell style={{ fontWeight: 'bold', color: 'black' }}>Clicks</TableCell>
                    <TableCell style={{ fontWeight: 'bold', color: 'black' }}>Cost</TableCell>
                    <TableCell style={{ fontWeight: 'bold', color: 'black' }}>Conversions</TableCell>
                    <TableCell style={{ fontWeight: 'bold', color: 'black' }}>Revenue</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData2.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ paddingTop: "7px", paddingBottom: '7px' }}>{row.Group}</TableCell>
                      <TableCell style={{ paddingTop: "7px", paddingBottom: '7px' }}>{row.clicks.toLocaleString()}</TableCell>
                      <TableCell style={{ paddingTop: "7px", paddingBottom: '7px' }}>USD {row.cost.toLocaleString()}</TableCell>
                      <TableCell style={{ paddingTop: "7px", paddingBottom: '7px' }}>{row.conversions}</TableCell>
                      <TableCell style={{ paddingTop: "7px", paddingBottom: '7px' }}>USD {row.revenue.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                  {/* Total row */}
                  <TableRow>
                    <TableCell >{calculateTotal2().Group}</TableCell>
                    <TableCell>{calculateTotal2().clicks}</TableCell>
                    <TableCell>USD {calculateTotal2().cost.toLocaleString()}</TableCell>
                    <TableCell>{calculateTotal2().conversions}</TableCell>
                    <TableCell>USD {calculateTotal2().revenue.toLocaleString()}</TableCell>
                  </TableRow>


                </TableBody>
              </Table>
            </TableContainer>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingRight: '15px', marginTop: '60px' }}>
            <Switch
              checked={showChart}
              onChange={() => setShowChart(!showChart)}
              style={{ marginLeft: 'auto' }}
            />
          </div>

        </Card>
      </div>
    </div>
  );
};


export default Dashboard;
