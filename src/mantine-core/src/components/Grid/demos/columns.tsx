import React from 'react';
import { Grid } from '../Grid';
import { ColWrapper as Col } from './ColWrapper';

const code = `
<Grid columns={24}>
  <Grid.Col span={12}>1</Grid.Col>
  <Grid.Col span={6}>2</Grid.Col>
  <Grid.Col span={6}>3</Grid.Col>
</Grid>
`;

function Demo() {
  return (
    <Grid columns={24}>
      <Col span={12}>1</Col>
      <Col span={6}>2</Col>
      <Col span={6}>3</Col>
    </Grid>
  );
}

export const columns: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
