import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, List, ListItem, ListItemText } from '@mui/material';

const CartStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [cartItems, setCartItems] = useState([
        { name: 'Product 1', price: 9.99 },
        { name: 'Product 2', price: 14.99 },
        { name: 'Product 3', price: 19.99 },
    ]);

    const steps = [
        {
            label: 'Show the items in the cart and the total price',
            content: (
                <div>
                    <Typography variant="h6">Cart Items</Typography>
                    <List>
                        {/* Replace this with your logic to render the cart items */}
                        {cartItems.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={item.name} secondary={`Price: $${item.price}`} />
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
                    {/* Replace this with your delivery information form */}
                    <Form method="post" >
                        <input type="text" name="City" label="Your City:"></input>
                    </Form>
                    <Typography variant="h6">Delivery Information</Typography>
                    {/* Your form elements go here */}
                </div>
            ),
        },
        {
            label: 'Choose the payment method',
            content: (
                <div>
                    {/* Replace this with your payment method selection */}
                    <Typography variant="h6">Payment Method</Typography>
                    {/* Your payment method selection goes here */}
                </div>
            ),
        },
        {
            label: 'View the receipt and proceed to payment',
            content: (
                <div>
                    <Typography variant="h6">Receipt and Payment Summary</Typography>
                    {/* Your receipt and payment summary goes here */}
                </div>
            ),
        },
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Container> <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step, index) => (
                <Step key={step.label}>
                    <StepLabel>{step.label}</StepLabel>
                </Step>
            ))}
        </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography variant="h5" gutterBottom>
                            All steps completed - you're finished
                        </Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography variant="h5" gutterBottom>
                            Step {activeStep + 1}
                        </Typography>
                        <div>{steps[activeStep].content}</div>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div></Container>


    );
};

export default CartStepper;