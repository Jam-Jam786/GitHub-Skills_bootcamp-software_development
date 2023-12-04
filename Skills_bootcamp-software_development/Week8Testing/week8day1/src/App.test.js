import { render, screen } from '@testing-library/react';
import App from './App';
import {Calculator} from './Addition';

const app = require("./Addition")

let calculator = new Calculator(4, 6);

test("it returns the result of two numbers added together", () =>
{
  expect(calculator.addition()).toBe(10);
})

test("it returns the results of two numbers multiplied", () =>
{
  expect(calculator.multiplication()).toBe(24);
})

test("the calculators input can be changed", () =>
{
  calculator.changeInputs(10, 2)
  expect(calculator.augend).toBe(10);
})

test("the calculator can return the sum of it's inputs divided", () =>
{
  calculator.changeInputs(10, 2)
  expect(calculator.divide()).toBe(5);
})

test("the calculator can return the results of one number subtracted by another number", () =>
{
  calculator.changeInputs(10, 2)
  expect(calculator.subtraction()).toBe(8);
})1111