import React from 'react';
import { Page } from '@shopify/polaris';
import TimerForm from '../components/TimerForm';
import TimerList from '../components/TimerList';

const HomePage = () => (
  <Page title="Countdown Timer">
    <TimerForm />
    <TimerList />
  </Page>
);

export default HomePage;
