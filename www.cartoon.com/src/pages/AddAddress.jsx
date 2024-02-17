import React, { useState } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import AddressCard from "./AdreessCard";

export default function AddDeliveryAddressForm({ handleNext }) {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    // For this example, you can handle order creation directly here without dispatching actions or using Redux
    console.log("Creating order with address:", address);

    // After performing all the operations
    handleNext();
  };

  return (
    <Grid container spacing={4} backgroundColor="white">
      <Grid item xs={12} lg={5}>
        <Box className="bg-white border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
          {/* Hardcoded addresses for demonstration */}
          {[
            {
              id: 1,
              firstName: "John",
              lastName: "Doe",
              streetAddress: "123 Main St",
              city: "New York",
              state: "NY",
              zipCode: "10001",
              mobile: "123-456-7890",
            },
            // Add more addresses as needed
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedAddress(item)}
              className="p-5 py-7 border-b cursor-pointer"
            >
              <AddressCard address={item} />
              {selectedAddress?.id === item.id && (
                <Button
                  sx={{ mt: 2 }}
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={() => handleSubmit(item)}
                >
                  Delivered Here
                </Button>
              )}
            </div>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} lg={7}>
        <Box className=" checkoutAddressOuter border rounded-md shadow-md p-5" sx={{backgroundColor:"white"}}>
          <form onSubmit={handleSubmit} className="bg-white">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="shipping address"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ padding: ".9rem 1.5rem" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Delivered Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
