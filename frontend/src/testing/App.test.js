import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'



import App from '../App';

test('renders App from App.js', () => {
  render(<App />);
  const linkElement = screen.getByText('Code Hut');
  const linkElement1 = screen.getByText('App Ideas');
  const linkElement2 = screen.getByText('Something');

  expect(linkElement).toBeInTheDocument();
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();

});


//Navigating Testing From Home ("Code Hut") Page

test('app navigating to Home Page', () =>{
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App/>
    </Router>
  )

  expect(screen.getByText('About Me')).toBeInTheDocument();

  const leftClick = {button: 0}

  userEvent.click(screen.getByText('Code Hut'), leftClick)

  expect(screen.getByText('About Me')).toBeInTheDocument()
})


test('app navigating to App Ideas Page', () =>{
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App/>
    </Router>
  )

  expect(screen.getByText('About Me')).toBeInTheDocument();

  const leftClick = {button: 0}

  userEvent.click(screen.getByText('App Ideas'), leftClick)

  expect(screen.getByText('Author:')).toBeInTheDocument()
  expect(screen.getByText('Title:')).toBeInTheDocument()
  expect(screen.getByText('Description:')).toBeInTheDocument()

  //Switch Back to Home Screen to Test other navigation

})

test('app navigating to Something Page', () =>{
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App/>
    </Router>
  )

  expect(screen.getByText('Author:')).toBeInTheDocument()
  expect(screen.getByText('Title:')).toBeInTheDocument()
  expect(screen.getByText('Description:')).toBeInTheDocument()
  const leftClick = {button: 0}

  userEvent.click(screen.getByText('Something'), leftClick)

  expect(screen.getByText('Something Here')).toBeInTheDocument();


})

test('app navigating to Home Page', () =>{
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App/>
    </Router>
  )

  expect(screen.getByText('Something Here')).toBeInTheDocument();

  const leftClick = {button: 0}

  userEvent.click(screen.getByText('Code Hut'), leftClick)

  expect(screen.getByText('About Me')).toBeInTheDocument()
})