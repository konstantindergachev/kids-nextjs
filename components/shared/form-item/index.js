import React from 'react';

export const FormItem = ({ item, value, onChange, onBlur, onKeyPress }) => {
  const { component: FormItem } = item;
  return (
    <FormItem
      type={item.type}
      name={item.name}
      placeholder={item.placeholder}
      value={value[item.value]}
      cols={item.cols}
      rows={item.rows}
      onChange={onChange}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
    />
  );
};
