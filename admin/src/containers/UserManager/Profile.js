import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {AddAPhoto, Timeline, Info, Photo, VideoLibrary, People, Event, LibraryBooks} from '@material-ui/icons';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
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
  
  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

function ScrollableTabsButtonForce() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            fullWidth={true}
            className="tab-center"
          >
            <Tab label="Timeline" icon={<Timeline />} {...a11yProps(0)} />
            <Tab label="About" icon={<Info />} {...a11yProps(1)} />
            <Tab label="Project" icon={<LibraryBooks />} {...a11yProps(2)} />
            <Tab label="Photos" icon={<Photo/>} {...a11yProps(3)} />
            <Tab label="Videos" icon={<VideoLibrary />} {...a11yProps(4)} />
            <Tab label="Friends" icon={<People />} {...a11yProps(5)} />
            <Tab label="Event" icon={<Event />} {...a11yProps(6)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </div>
    );
  }

export default class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="profile-top-image">
                                <div className="profile-avatar">
                                    <img src="https://media-a.laodong.vn/Storage/NewsPortal/2020/3/12/790444/My-Nhan-Redvelvet5.jpg" className="img-fluid" alt="avatar"/>
                                </div>
                                <div className="update-profile-image-top">
                                    <input accept="image/*" id="contained-button-file"  multiple type="file"/>
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span" startIcon={<AddAPhoto/>}>
                                            <span className="text-button">Change Image</span>
                                        </Button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="profile-content">
                                <ScrollableTabsButtonForce />
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
