import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AdvertisementBoard from './AdvertisementBoard';

describe('AdvertisementBoard component', () => {
  test('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<AdvertisementBoard />);
    expect(getByText('Рекламная доска')).toBeInTheDocument();
    expect(getByPlaceholderText('Введите текст объявления')).toBeInTheDocument();
  });

  test('adds new advertisement', () => {
    const { getByPlaceholderText, getByText } = render(<AdvertisementBoard />);
    const inputElement = getByPlaceholderText('Введите текст объявления');
    const addButton = getByText('Добавить рекламу');
    fireEvent.change(inputElement, { target: { value: 'New Advertisement' } });
    fireEvent.click(addButton);
    expect(getByText('New Advertisement')).toBeInTheDocument();
  });

});
