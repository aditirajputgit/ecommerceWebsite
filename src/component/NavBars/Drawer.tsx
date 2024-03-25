import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Divider, styled } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import Crop54Icon from '@material-ui/icons/Crop54';
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const menuArray = ["Demo", "Shop", "Product", "Portfolio", "Lookbook", "Blog"];
const CategoriesArray = ["Accessories","Bag","Jewellery","Glasses","Hats","Flower","Furniture","Men","Lingeries","Oegani","Shoes","Watch","Women"]
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

class TabPanel extends React.Component<TabPanelProps> {
  render() {
    const { children, value, index, ...other } = this.props;

    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </Box>
    );
  }
}

interface SimpleTabsProps {}

interface SimpleTabsState {
  value: number;
  menuArrays: Array<string>;
  CategoriesArrays : Array<string>;
}

class SimpleTabs extends React.Component<SimpleTabsProps, SimpleTabsState> {
  constructor(props: SimpleTabsProps) {
    super(props);
    this.state = {
      value: 0,
      menuArrays: menuArray,
      CategoriesArrays : CategoriesArray
    };
  }

  singleItemDrawer = (item: string) => {
    return (
      <>
        <Box className="menuIcon">
          <Typography className="navbaritem">{item}</Typography>
          <Box className="drawerSingleItem">
            <Divider
              orientation="vertical"
              flexItem
              style={{ marginRight: "10px", backgroundColor: "black" }}
            />
            <AddIcon />
          </Box>
        </Box>
        <Divider />
      </>
    );
  };
  singleItemCategory = (item:string) => {
    return (
      <>
        <Box className="menuIcon" style={{ justifyContent: "space-between" }}>
          <Typography className="navbaritem">{item}</Typography>
          <Box className="drawerSingleItem">
            <ArrowRightAltIcon />
          </Box>
        </Box>
        <Divider />
      </>
    );
  }

  menuTabValue = () => {
    return (
      <>
        <MenuStyleItem>
          {this.state.menuArrays.map((item) => {
            return <>{this.singleItemDrawer(item)}</>;
          })}
          <Box className="menuIcon">
            <Typography className="navbaritem">Buy Theme</Typography>
          </Box>
          <Divider />
          <Box className="menuIcons">
            <FavoriteBorderIcon style={{ marginRight: "12px" }} />
            <Typography className="navbaritem">Wishlist</Typography>
          </Box>
          <Divider />
          <Box className="menuIcons">
            <SearchIcon style={{ marginRight: "12px" }} />
            <Typography className="navbaritem">Search</Typography>
          </Box>
          <Divider />
          <Box className="menuIcons">
            <PersonIcon style={{ marginRight: "12px" }} />
            <Typography className="navbaritem">Login/Register</Typography>
          </Box>
          <Divider />
          <Box style={{ marginTop: "15px" }}>
            <Typography className="navbaritem">Need help?</Typography>
            <Box className="menuIcons" style={{ color: "grey" }}>
              <PhoneIcon style={{ marginRight: "12px" }} />
              <Typography>+91 92003 92475</Typography>
            </Box>
            <Box className="menuIcons" style={{ color: "grey" }}>
              <MailIcon style={{ marginRight: "12px" }} />
              <Typography>aditirajput200017@gmail.com</Typography>
            </Box>
          </Box>
          <Divider />
          <Box className="menuIcon">
            <Typography className="navbaritem">English</Typography>

            <AddIcon />
          </Box>
          <Divider />
          <Box className="menuIcon">
            <Box style={{ display :"flex", color: "grey" }}>
              <Crop54Icon />
              <Typography>+91 92003 92475</Typography>
            </Box>
            <AddIcon />
          </Box>
          <Divider />
        </MenuStyleItem>
      </>
    );
  };

  categoriesTabValue = () =>{
    return(
        <>
             <MenuStyleItem>
                {this.state.CategoriesArrays.map((item) => {
                    return(<>
                        {this.singleItemCategory(item)}
                    </>)
                })}
             </MenuStyleItem>
        </>
    )
  }

  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({ value: newValue });
  };

  render() {
    const { value } = this.state;
    return (
      <Box style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Menu" />
            <Tab label="Categories" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {this.menuTabValue()}
        </TabPanel>
        <TabPanel value={value} index={1}>
           {this.categoriesTabValue()}
        </TabPanel>
      </Box>
    );
  }
}

export default SimpleTabs;
const MenuStyleItem = styled(Box)({
  padding: "0px 10px",
  "& .menuIcon": {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 20px 10px 20px",
    alignItems: "center",
  },
  "& .menuIcon:hover": {
    color: "blue",
    cursor: "pointer",
  },
  "& .menuIcons": {
    display: "flex",
    padding: "20px 20px 10px 20px",
  },
  "& .iconDrawer": {
    borderLeft: "1px solid black",
  },
  "& .drawerSingleItem": {
    display: "flex",
    justifyContent: "space-between",
  },
});
