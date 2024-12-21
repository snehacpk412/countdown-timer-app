import React, { useState } from 'react';
import { FormLayout, TextField, Button } from '@shopify/polaris';
import axios from 'axios';

const TimerForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [shop, setShop] = useState('demo-shop'); // Replace with the actual shop identifier.

  const handleSubmit = async () => {
    try {
      const data = { shop, startDate, endDate, description };
      const response = await axios.post('/api/timers', data);
      alert('Timer created successfully!');
    } catch (error) {
      console.error(error);
      alert('Error creating timer.');
    }
  };

  return (
    <FormLayout>
      <TextField
        label="Start Date"
        type="datetime-local"
        value={startDate}
        onChange={setStartDate}
      />
      <TextField
        label="End Date"
        type="datetime-local"
        value={endDate}
        onChange={setEndDate}
      />
      <TextField
        label="Description"
        value={description}
        onChange={setDescription}
      />
      <Button onClick={handleSubmit} primary>
        Create Timer
      </Button>
    </FormLayout>
  );
};

export default TimerForm;
