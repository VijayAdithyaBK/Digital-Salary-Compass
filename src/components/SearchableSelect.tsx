import React from 'react';
import Select from 'react-select';

interface Option {
  value: string;
  label: string;
  [key: string]: any;
}

interface Props {
  options: Option[];
  value: Option | null;
  onChange: (option: Option | null) => void;
  placeholder: string;
  className?: string;
}

export function SearchableSelect({ options, value, onChange, placeholder, className }: Props) {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      classNamePrefix="react-select"
      isClearable
      isSearchable
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: '#111827',
          primary25: '#F3F4F6',
          primary50: '#E5E7EB',
          primary75: '#D1D5DB',
        },
      })}
    />
  );
}