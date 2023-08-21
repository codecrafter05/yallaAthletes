import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, List, ListItem, ListItemText, TextField, Container, Grid } from '@mui/material';
import './stepperstyle.css'


const CartStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [cartItems, setCartItems] = useState([
        { product: 'Product 1', quantity: 1, price: 9.99 },
        { product: 'Product 2', quantity: 1, price: 14.99 },
        { product: 'Product 3', quantity: 1, price: 19.99 },
    ]);
    const [shippingAddress, setShippingAddress] = useState({
        country: '',
        city: '',
        houseNo: '',
        blockNo: '',
        roadNo: '',
    });
    const [paymentMethod, setPaymentMethod] = useState('');

    function getTotalPrice(cartItems) {
        let totalPrice = 0;
        for (const item of cartItems) {
            totalPrice += item.price * item.quantity;
        }
        return totalPrice;
    }

    const steps = [
        {
            label: 'Show the items in the cart and the total price',
            content: (
                <Container className='gg'>
                    <Typography variant="h5">Cart Items</Typography>
                    <List>
                        {cartItems.map((item, index) => (

                            <ListItem key={index}>
                                <ListItemText
                                    primary={item.product}
                                    secondary={`Quantity: ${item.quantity} - Price: BD ${item.price}`}
                                />
                            </ListItem>
                        ))}
                    </List>

                </Container>
            ),
        },
        {
            label: 'Submit the delivery information',
            content: (
                <Container className='gg'>
                    <Typography variant="h5">Delivery Information</Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                value={shippingAddress.country}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                                placeholder="Country"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                value={shippingAddress.city}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                                placeholder="City"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                value={shippingAddress.houseNo}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, houseNo: e.target.value })}
                                placeholder="House No"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                value={shippingAddress.blockNo}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, blockNo: e.target.value })}
                                placeholder="Block No"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                value={shippingAddress.roadNo}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, roadNo: e.target.value })}
                                placeholder="Road No"
                            />
                        </Grid>
                    </Grid>

                </Container>
            ),
        },
        {
            label: 'Choose the payment method',
            content: (
                <Container className='gg'>
                    <Typography variant="h5">Payment Method</Typography>
                    <TextField
                        fullWidth
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        placeholder="Payment Method"
                    />
                </Container>
            ),
        },
        {
            label: 'View the receipt and proceed to payment',
            content: (
                <Container className='gg'>
                    <Typography variant="h4">Receipt and Payment Summary</Typography>

                    <List>
                        <Typography variant="h5">Cart Items</Typography>
                        {cartItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={item.product}
                                    secondary={`Quantity: ${item.quantity} - Price: $${item.price}`}
                                />
                            </ListItem>
                        ))}
                        <ListItem primary={`Total Price: BD`}
                            secondary={`${getTotalPrice(cartItems)}`}
                        ></ListItem>
                    </List>



                    <List>
                        <Typography variant="h6">Delivery Information</Typography>
                        <ListItem>
                            <Typography>Country: {shippingAddress.country}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="subtitle1">City: {shippingAddress.city}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="subtitle1">House No: {shippingAddress.houseNo}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="subtitle1">Block No: {shippingAddress.blockNo}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="subtitle1">Road No: {shippingAddress.roadNo}</Typography>
                        </ListItem>
                    </List>

                    <List>
                        <Typography variant="h6">Payment Method</Typography>
                        <ListItem>
                            <Typography variant="subtitle1">Payment Method: {paymentMethod}</Typography>
                        </ListItem>
                    </List>
                </Container>

            ),
        }
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((step) => (
                    <Step key={step.label}>
                        <StepLabel>{step.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <Typography variant="h5">Thank you for your order!</Typography>
                ) : (
                    <div>
                        {steps[activeStep].content}
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartStepper;