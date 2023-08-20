import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, List, ListItem, ListItemText, TextField, Container, Grid } from '@mui/material';

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

    const steps = [
        {
            label: 'Show the items in the cart and the total price',
            content: (
                <div>
                    <Typography variant="h6">Cart Items</Typography>
                    <List>
                        {cartItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={item.product} secondary={`Quantity: ${item.quantity} - Price: $${item.price}`} />
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="h6">Total Price: $XX.XX</Typography>
                </div>
            ),
        },
        {
            label: 'Submit the delivery information',
            content: (
                <div>
                    <Typography variant="h6">Delivery Information</Typography>
                    <Container maxWidth="sm">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Country</Typography>
                                <TextField
                                    fullWidth
                                    value={shippingAddress.country}
                                    onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">City</Typography>
                                <TextField
                                    fullWidth
                                    value={shippingAddress.city}
                                    onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">House No</Typography>
                                <TextField
                                    fullWidth
                                    value={shippingAddress.houseNo}
                                    onChange={(e) => setShippingAddress({ ...shippingAddress, houseNo: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Block No</Typography>
                                <TextField
                                    fullWidth
                                    value={shippingAddress.blockNo}
                                    onChange={(e) => setShippingAddress({ ...shippingAddress, blockNo: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Road No</Typography>
                                <TextField
                                    fullWidth
                                    value={shippingAddress.roadNo}
                                    onChange={(e) => setShippingAddress({ ...shippingAddress, roadNo: e.target.value })}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            ),
        },
        {
            label: 'Choose the payment method',
            content: (
                <div>
                    <Typography variant="h6">Payment Method</Typography>
                    <Typography variant="subtitle1">Payment Method</Typography>
                    <TextField
                        fullWidth
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                </div>
            ),
        },
        {
            label: 'View the receipt and proceed to payment',
            content: (
                <div>
                    <Typography variant="h6">Receipt and Payment Summary</Typography>

                    <Typography variant="h6">Cart Items</Typography>
                    <List>
                        {cartItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={item.product} secondary={`Quantity: ${item.quantity} - Price: $${item.price}`} />
                            </ListItem>
                        ))}
                    </List>

                    <Typography variant="h6">Total Price: $XX.XX</Typography>

                    <Typography variant="h6">Delivery Information</Typography>
                    <Typography variant="subtitle1">Country: {shippingAddress.country}</Typography>
                    <Typography variant="subtitle1">City: {shippingAddress.city}</Typography>
                    <Typography variant="subtitle1">House No: {shippingAddress.houseNo}</Typography>
                    <Typography variant="subtitle1">Block No: {shippingAddress.blockNo}</Typography>
                    <Typography variant="subtitle1">Road No: {shippingAddress.roadNo}</Typography>

                    <Typography variant="h6">Payment Method</Typography>
                    <Typography variant="subtitle1">Payment Method: {paymentMethod}</Typography>

                    <Button variant="contained" color="primary">Proceed to Payment</Button>
                </div>
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