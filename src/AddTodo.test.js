import { render, screen, fireEvent} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});




 test('that App component doesn\'t render dupicate Task', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "05/30/2023";
  const newTask = "History Test";
  fireEvent.change(inputTask, { target: { value: newTask}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  expect(screen.getByTestId(newTask)).toBeInTheDocument();

  fireEvent.change(inputTask, { target: { value: "History Test"}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  const check = screen.getAllByText(/Test/i);
  expect(check.length).toBe(1);
 });

 test('that App component doesn\'t add a task without task name', () => {
  render(<App />);
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "05/30/2023";
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  const check = screen.getByText(/You have no todo's left/i);
  expect(check).toBeInTheDocument();
 });

 test('that App component doesn\'t add a task without due date', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const element = screen.getByRole('button', {name: /Add/i}) ;
  fireEvent.change(inputTask, { target: { value: "History Test"}});
  fireEvent.click(element);
  const check = screen.getByText(/You have no todo's left/i);
  expect(check).toBeInTheDocument();
 });



 test('that App component can be deleted thru checkbox', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "05/30/2023";
  const newTask = "History Test";
  fireEvent.change(inputTask, { target: { value: newTask}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  expect(screen.getByTestId(newTask)).toBeInTheDocument();

  const checkTask = screen.getByRole('checkbox');
  fireEvent.click(checkTask);
  const check = screen.getByText(/You have no todo's left/i);
  expect(check).toBeInTheDocument();
 });


 test('that App component renders different colors for past due events', () => {
  render(<App />);
  const normalColor = "rgba(255, 255, 255, 1)";
  const pastDueColor = "#ff0707ad";

  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "05/30/2023";
  const newTask = "History Test";
  fireEvent.change(inputTask, { target: { value: newTask}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);
  const normalCard = screen.getByTestId(newTask);
  expect(normalCard).toBeInTheDocument();

  
  const dueDatePre = "05/30/2020";
  const newTask2 = "Math Test";
  fireEvent.change(inputTask, { target: { value: newTask2}});
  fireEvent.change(inputDate, { target: { value: dueDatePre}});
  fireEvent.click(element);
  const pastDueCard = screen.getByTestId(newTask2);
  expect(pastDueCard).toBeInTheDocument();

  expect(normalCard).toHaveStyle(`background: ${normalColor}`);
  expect(pastDueCard).toHaveStyle(`background: ${pastDueColor}`);
 });
