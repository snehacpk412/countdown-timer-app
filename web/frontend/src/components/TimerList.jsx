import React, { useState, useEffect } from 'react';
import { Card, ResourceList, TextStyle } from '@shopify/polaris';
import axios from 'axios';

const TimerList = () => {
  const [timers, setTimers] = useState([]);
  const shop = 'demo-shop'; // Replace with the actual shop identifier.

  useEffect(() => {
    const fetchTimers = async () => {
      try {
        const response = await axios.get(`/api/timers/${shop}`);
        setTimers(response.data);
      } catch (error) {
        console.error(error);
        alert('Error fetching timers.');
      }
    };

    fetchTimers();
  }, [shop]);

  return (
    <Card title="Existing Timers" sectioned>
      <ResourceList
        items={timers}
        renderItem={(timer) => {
          const { _id, startDate, endDate, description } = timer;

          return (
            <ResourceList.Item id={_id} accessibilityLabel={`Timer ${description}`}>
              <TextStyle variation="strong">{description}</TextStyle>
              <div>Start: {new Date(startDate).toLocaleString()}</div>
              <div>End: {new Date(endDate).toLocaleString()}</div>
            </ResourceList.Item>
          );
        }}
      />
    </Card>
  );
};

export default TimerList;
