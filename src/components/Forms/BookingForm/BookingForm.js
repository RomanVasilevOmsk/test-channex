import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { Button, DatePicker, Input, Typography } from 'antd';

import { required } from 'utils/validation';
import { getOptionsForSelect } from 'utils';

import { FieldSelect } from 'components/FormFields';
import FormFieldInner from 'components/FormFieldInner';
import RoomsField from './RoomsField';

import { FirstTitleWrapper, ButtonWrapper } from './styles';

const { Title } = Typography;
const { RangePicker } = DatePicker;

const BookingForm = ({ onSubmit, className, ratePlanes, channels, initialValues }) => {
  const ratePlanesOptions = useMemo(() => getOptionsForSelect(ratePlanes?.data), [
    ratePlanes,
  ]);
  const channelsOptions = useMemo(() => getOptionsForSelect(channels?.data), [channels]);

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      mutators={{
        ...arrayMutators,
      }}
      render={({ handleSubmit, form, values, submitting }) => (
        <div onSubmit={handleSubmit} className={className}>
          <Field
            name="channel_id"
            label="Channel"
            component={FieldSelect}
            options={channelsOptions}
            validate={required}
            isRequired
          />
          <Field>
            {() => (
              <FormFieldInner label="Dates">
                <RangePicker
                  placeholder={['From', 'To']}
                  disabledDate={d => !d || d.isBefore(new Date())}
                  onChange={(values, formatString) => {
                    form.change('arrival_date', formatString[0]);
                    form.change('departure_date', formatString[1]);
                  }}
                />
              </FormFieldInner>
            )}
          </Field>

          <FirstTitleWrapper>
            <Title level={5}>Customer</Title>
          </FirstTitleWrapper>

          <Field name="customer.name" validate={required}>
            {({ input, meta }) => {
              return (
                <FormFieldInner
                  label="Name"
                  error={meta.touched && meta.error}
                  isRequired
                >
                  <Input
                    value={input.value}
                    onChange={e => input.onChange(e.target.value)}
                  />
                </FormFieldInner>
              );
            }}
          </Field>

          <Field name="customer.surname" validate={required}>
            {({ input, meta }) => {
              return (
                <FormFieldInner
                  label="Surname"
                  error={meta.touched && meta.error}
                  isRequired
                >
                  <Input
                    value={input.value}
                    onChange={e => input.onChange(e.target.value)}
                  />
                </FormFieldInner>
              );
            }}
          </Field>

          <RoomsField ratePlanes={ratePlanesOptions} form={form} values={values} />

          <ButtonWrapper>
            <Button type="primary" onClick={handleSubmit} disabled={submitting}>
              Book
            </Button>
          </ButtonWrapper>
        </div>
      )}
    />
  );
};

BookingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  initialValues: PropTypes.shape({}),
  ratePlanes: PropTypes.shape({}),
  channels: PropTypes.shape({}),
};

export default BookingForm;
