import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/core';
import { generateBorderStyles, InputStylesApiWrapper } from '@mantine/ds/src';
import { DateRangePicker, DateRangePickerProps } from '../DateRangePicker';
import { DateRangePicker as DateRangePickerStylesApi } from '../../DatePickerBase/styles.api';

const styles = generateBorderStyles(DateRangePickerStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<DateRangePickerProps>) {
  return <InputStylesApiWrapper component={DateRangePicker} {...props} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/dates/DateRangePicker/styles-api', module)
  .add('With sx', () => (
    <Wrapper sx={{ border: '1px solid red', maxWidth: 400 }} mx="auto" mt="xl" />
  ))
  .add('Root styles object', () => <Wrapper styles={{ root: { border: '1px solid blue' } }} />)
  .add('Root styles function', () => (
    <Wrapper styles={() => ({ root: { border: '1px solid blue' } })} />
  ))
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ DateRangePicker: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
