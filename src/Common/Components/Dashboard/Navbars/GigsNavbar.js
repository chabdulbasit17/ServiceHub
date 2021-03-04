import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
} from "reactstrap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function allProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Active" {...allProps(0)} />
          <Tab label="Pending Approval" {...allProps(1)} />
          <Tab label="Requires Modification" {...allProps(2)} />
          <Tab label="Draft" {...allProps(3)} />
          <Tab label="Denied" {...allProps(4)} />
          <Tab label="Paused" {...allProps(5)} />
          <Tab label="Favorites" {...allProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
          {/* Page content */}
        <Container className="mt--10" fluid>      
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Active Gigs</h3>
                </CardHeader>
              </Card>
            </div>
          </Row>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
          <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">Gigs Pending Approval</h3>
                  </CardHeader>
                </Card>
              </div>
            </Row>
          </Container>
      
      </TabPanel>
      <TabPanel value={value} index={2}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
            <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">Gigs that require Modifications</h3>
                  </CardHeader>
                </Card>
              </div>
            </Row> 
          </Container>
      
      </TabPanel>
      <TabPanel value={value} index={3}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
         <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Draft Gigs</h3>
                </CardHeader>
              </Card>
            </div>
          </Row>
          </Container>
      
      </TabPanel>
      <TabPanel value={value} index={4}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
         <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Denied Gigs</h3>
                </CardHeader>
              </Card>
            </div>
          </Row>
        </Container>
      
      </TabPanel>
      <TabPanel value={value} index={5}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
         <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Paused Gigs</h3>
                </CardHeader>
              </Card>
            </div>
          </Row>
        </Container>
      
      </TabPanel>
      <TabPanel value={value} index={6}>
         {/* Page content */}
         <Container className="mt--10" fluid>      
         <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Gigs that are Added to Favorites</h3>
                </CardHeader>
              </Card>
            </div>
          </Row>
        </Container>
      
      </TabPanel>
    </div>
  );
}
