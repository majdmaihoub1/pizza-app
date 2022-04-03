import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { toppings } from '../../context/api.js';

const OrderForm = (total) => {
  const pizzas = [
    { size: 'large', price: 50 },
    { size: 'medium', price: 40 },
    { size: 'small', price: 30 },
  ];

  const [pizzaType, setPizzaType] = useState(pizzas);
  const [checked, setChecked] = useState(
    new Array(toppings.length).fill(false)
  );
  const [toppingsTotal, setToppingsTotal] = useState(0);
  // const [pizzaTotal, setPizzaTotal] = useState(0);

  const handleChange = (event) => {
    setPizzaType(event.target.value);
  };
  const handleToppings = (position) => {
    const updateChange = checked.map((item, index) =>
      index === position ? !item : item
    );
    setChecked(updateChange);

    const toppingsPrice = updateChange.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + toppings[index].price;
      }
      return sum;
    }, 0);
    setToppingsTotal(toppingsPrice);
  };

  const pizzasprice = pizzaType.price;
  const pizzaTotal = pizzasprice + Number(toppingsTotal);
  console.log(pizzaType.price);
  total = Number(pizzaTotal) ? pizzaTotal : 0;

  return (
    <div>
      <h2>choose Pizza type</h2>
      <Select value={pizzaType} onChange={handleChange}>
        {pizzas?.map((pizza, index) => (
          <MenuItem key={index} value={pizza}>
            {pizza.size}
          </MenuItem>
        ))}
      </Select>

      <FormGroup>
        {toppings.map(({ name, price }, index) => (
          <FormControlLabel
            control={
              <Checkbox
                key={index}
                checked={checked[index]}
                onChange={() => handleToppings(index)}
              />
            }
            label={`${name} (${price}$)`}
          />
        ))}
      </FormGroup>

      <p>
        You've seleected the {pizzaType.size} <br />
        the price is {toppingsTotal}
      </p>
      {total}
    </div>
  );
};

export default OrderForm;
