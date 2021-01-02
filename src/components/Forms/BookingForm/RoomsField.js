import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { InputNumber, Typography, Space } from 'antd';

import { FieldSelect } from 'components/FormFields';
import FormFieldInner from 'components/FormFieldInner';
import { isInteger, required } from 'utils/validation';
import { getDates } from 'utils';
import { TitleWrapper, FirstTitleWrapper } from './styles';
const { Title, Text } = Typography;

const RoomsField = ({ form, values, ratePlanes }) => {
  useEffect(() => {
    form.change(
      'rooms',
      values.rooms?.map(item => ({
        ...item,
        days: getDates(values.arrival_date, values.departure_date),
      })),
    );
  }, [values.arrival_date, values.departure_date]);

  return (
    <FieldArray name="rooms">
      {({ fields }) => {
        return (
          <>
            <FirstTitleWrapper>
              <Title level={5}>Rooms</Title>

              <PlusOutlined
                onClick={() => {
                  form.mutators.push('rooms', {
                    occupancy: {
                      adults: 1,
                      children: 0,
                      infants: 0,
                    },
                    days: getDates(values.arrival_date, values.departure_date),
                  });
                }}
              />
            </FirstTitleWrapper>
            {fields.map((item, index) => (
              <Space
                key={index}
                style={{ width: '100%', marginBottom: 8 }}
                direction="vertical"
              >
                <TitleWrapper>
                  <Title level={5}>Room #{index + 1}</Title>
                  {index > 0 && (
                    <Text
                      type="danger"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        fields.remove(index);
                      }}
                    >
                      remove
                    </Text>
                  )}
                </TitleWrapper>

                <Field
                  name={`${item}.rate_plan_id`}
                  label="Rate plan"
                  component={FieldSelect}
                  options={ratePlanes}
                  validate={required}
                  isRequired
                />

                <Field name={`${item}.occupancy.adults`} validate={isInteger}>
                  {({ input, meta }) => {
                    return (
                      <FormFieldInner label="Adults" meta={meta} isRequired>
                        <InputNumber
                          value={input.value}
                          onChange={val => {
                            input.onChange(val);
                          }}
                        />
                      </FormFieldInner>
                    );
                  }}
                </Field>

                <Field name={`${item}.occupancy.children`} validate={isInteger}>
                  {({ input, meta }) => {
                    return (
                      <FormFieldInner label="Children" meta={meta} isRequired>
                        <InputNumber
                          value={input.value}
                          onChange={val => {
                            input.onChange(val);
                          }}
                        />
                      </FormFieldInner>
                    );
                  }}
                </Field>

                <Field name={`${item}.occupancy.infants`} validate={isInteger}>
                  {({ input, meta }) => {
                    return (
                      <FormFieldInner label="Infants" meta={meta} isRequired>
                        <InputNumber
                          value={input.value}
                          onChange={val => {
                            input.onChange(val);
                          }}
                        />
                      </FormFieldInner>
                    );
                  }}
                </Field>

                <Field name={`${item}.days`}>
                  {({ input, meta }) => {
                    if (Object.entries(input.value?.length > 0)) {
                      return Object.entries(input.value).map((day, indexDay) => (
                        <FormFieldInner
                          key={indexDay}
                          label={day[0]}
                          meta={meta}
                          isRequired
                        >
                          <InputNumber
                            value={day[1]}
                            onChange={val => {
                              input.onChange({
                                ...input.value,
                                [day[0]]: val,
                              });
                            }}
                          />
                        </FormFieldInner>
                      ));
                    }
                    return null;
                  }}
                </Field>
              </Space>
            ))}
          </>
        );
      }}
    </FieldArray>
  );
};

RoomsField.propTypes = {
  form: PropTypes.shape({}),
  values: PropTypes.shape({}),
  ratePlanes: PropTypes.arrayOf(PropTypes.shape({})),
};

export default RoomsField;
