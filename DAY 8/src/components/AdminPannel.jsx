import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./AdminPannel.css";
import { Box, Button, Grid, TextField } from "@mui/material";

const productsData = [
  {
    name: "Hande Made Craft",
    id: 5,
    price: 192,
    seller: "Yazhini",
    images: "https://shorturl.at/egtAD",
  },
];
const customerData = [
  {
    id: 1,
    name: "Customer 1",
    email: "customer1@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Customer 2",
    email: "customer2@example.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Customer 3",
    email: "customer3@example.com",
    phone: "555-555-5555",
  },
];
const orderData = [
  {
    id: 1,
    customer: "Customer 1",
    product: "Product A",
    quantity: 2,
    total: 100,
  },
  {
    id: 2,
    customer: "Customer 2",
    product: "Product B",
    quantity: 1,
    total: 50,
  },
  {
    id: 3,
    customer: "Customer 1",
    product: "Product C",
    quantity: 3,
    total: 150,
  },
];

const artisanData = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  username: "johndoe123",
  email: "johndoe@example.com",
  phoneNumber: "+1 (123) 456-7890",
  address: {
    street: "123 Artisan Street",
    city: "Craftville",
    state: "Artisia",
    zip: "12345",
    country: "HandmadeLand",
  },
  skills: ["Pottery", "Woodworking", "Painting"],
  bio:
    "I'm a passionate artisan with a love for creating beautiful pottery, woodworking pieces, and unique paintings. I've been honing my craft for over a decade and take pride in handcrafting each item with care and attention to detail.",
  portfolio: [
    {
      title: "Handcrafted Pottery Set",
      description:
        "A set of hand-thrown pottery mugs and bowls, perfect for adding a touch of elegance to your dining table.",
      image:
        "https://example.com/images/pottery-set.jpg",
    },
    {
      title: "Wooden Coffee Table",
      description:
        "A custom-made wooden coffee table featuring intricate woodwork and a beautiful finish.",
      image:
        "https://example.com/images/wooden-coffee-table.jpg",
    },
    {
      title: "Abstract Canvas Painting",
      description:
        "An abstract canvas painting that explores the use of vibrant colors and shapes to evoke emotions.",
      image:
        "https://example.com/images/abstract-painting.jpg",
    },
  ],
};


const drawerWidth = 240;

const AdminPanel = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showCustomers, setShowCustomers] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showDashboard, setshowDashboard] = useState(true);

  const handleProductsClick = () => {
    setShowProducts(true);
    setShowCustomers(false);
    setShowOrders(false);
    setShowAddProduct(false);
    setShowProfile(false);
    setshowDashboard(false);
  };

  const handleCustomersClick = () => {
    setShowProducts(false);
    setShowCustomers(true);
    setShowOrders(false);
    setShowAddProduct(false);
    setShowProfile(false);
    setshowDashboard(false);
  };

  const handleOrdersClick = () => {
    setShowProducts(false);
    setShowCustomers(false);
    setShowOrders(true);
    setShowAddProduct(false);
    setShowProfile(false);
    setshowDashboard(false);
  };

  const handleAddProductClick = () => {
    setShowProducts(false);
    setShowCustomers(false);
    setShowOrders(false);
    setShowProfile(false);
    setShowAddProduct(true);
    setshowDashboard(false);
  };
  const handleProfileClick = () => {
    setShowProfile(true);
    setShowProducts(false);
    setShowCustomers(false);
    setShowOrders(false);
    setShowAddProduct(false);
    setshowDashboard(false);
  };
  
  const handelDashboardClick = () => {
    setShowProfile(false);
    setShowProducts(false);
    setShowCustomers(false);
    setShowOrders(false);
    setShowAddProduct(false);
    setshowDashboard(true);
  };
  
  
  const totalSales = 5000; 
  const totalProfit = 2000;
  const totalProducts = 10;
  const totalOrders = 25; 
  const totalCustomers = 50;
  return (
    <div className="admin-panel">
      <Drawer
        className="drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h6" color="primary" className="user-greeting">
          Hello, Name
        </Typography>
        <List>
          <ListItem button onClick={handelDashboardClick}>
            <ListItemIcon >
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={handleProductsClick}>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button onClick={handleCustomersClick}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" />
          </ListItem>
          <ListItem button onClick={handleOrdersClick}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button onClick={handleAddProductClick}>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Add Product" />
          </ListItem>
          <ListItem button onClick={handleProfileClick}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Earnings" />
          </ListItem>
        </List>
        <div className="logout-button">
          <IconButton
            color="primary"
            aria-label="Logout"
            style={{ float: "right" }}
          >
            <ExitToAppIcon />
          </IconButton>
        </div>
      </Drawer>

      {showProducts && (
        <div className="products-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Images</th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.id}</td>
                  <td>{product.price}</td>
                  <td>{product.seller}</td>
                  <td>{product.images}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showDashboard && (
        <div className="dashboard-data">
          <h2>Dashboard</h2>
          <div className="dashboard-stats">
            <p>Total Sales: ${totalSales}</p>
            <p>Total Profit: ${totalProfit}</p>
            <p>Total Products: {totalProducts}</p>
            <p>Total Orders: {totalOrders}</p>
            <p>Total Customers: {totalCustomers}</p>
            {/* You can add more data here as needed */}
          </div>
        </div>
      )}
      {showCustomers && (
        <div className="customers-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showOrders && (
        <div className="orders-table">
          <h2>Order Details</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td>{order.quantity}</td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showAddProduct && (
        <div className="add-product-form">
          <Grid item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-md p-5">
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="productName"
                      name="productName"
                      label="Product Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="afteramount"
                      name="afteramount"
                      label="Amount"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="beforeamount"
                      name="beforeamount"
                      label="Amount"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="discount"
                      name="discount"
                      label="Discount"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="description"
                      name="description"
                      label="Description"
                      fullWidth
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="highlights"
                      name="highlights"
                      label="Highlights"
                      fullWidth
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="details"
                      name="details"
                      label="Details"
                      fullWidth
                      multiline
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Button
                      sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                      size="large"
                      variant="contained"
                      type="submit"
                    >
                      Deliver Here
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </div>
      )}
      {showProfile &&(
        <div className="artisan-profile">
        {/* <h2>Artisan Profile</h2> */}
        <div className="profile-details">
          <p><strong>First Name:</strong> {artisanData.firstName}</p>
          <p><strong>Last Name:</strong> {artisanData.lastName}</p>
          <p><strong>Username:</strong> {artisanData.username}</p>
          <p><strong>Email:</strong> {artisanData.email}</p>
          <p><strong>Phone Number:</strong> {artisanData.phoneNumber}</p>
          {/* <p><strong>Address:</strong> {${artisanData.address.street}, ${artisanData.address.city}, ${artisanData.address.state}, ${artisanData.address.zip}, ${artisanData.address.country}}</p> */}
          <p><strong>Skills:</strong> {artisanData.skills.join(", ")}</p>
          <p><strong>Bio:</strong> {artisanData.bio}</p>
          <h3>Portfolio:</h3>
          <ul>
            {artisanData.portfolio.map((item, index) => (
              <li key={index}>
                <strong>Title:</strong> {item.title}<br />
                <strong>Description:</strong> {item.description}<br />
                {/* <img src={item.image} alt={item.title} width="200" height="150" /> */}
              </li>
            ))}
          </ul>
        </div>
        <Button >Update Profile</Button>
      </div>
      
      )}
      
    </div>
  );
};

export default AdminPanel;