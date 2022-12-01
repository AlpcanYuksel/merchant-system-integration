import { Box, Paper, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';

const SıgnInOutContainer = () => {
    const paperStyle={width:380, margin:"20px auto"}

    const [value,setValue]=useState()
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      function TabPanel(props) {
        const { children, value=0, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
  return (
    <Paper elevation={20} style={paperStyle}>
        <Tabs
          value = {value}
          indicatorColor="primary"
          textColor='primary'
          onChange={handleChange}
          aria-label="disabled tabs example"
        
        >

            <Tab label="Sign In" />
            
            <Tab label="Sıgn Up"/>
        </Tabs>
        <TabPanel value={value} index={0}>
            <Login handleChange={handleChange}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Register/>
        </TabPanel>
        
    </Paper>
  )
}

export default SıgnInOutContainer
