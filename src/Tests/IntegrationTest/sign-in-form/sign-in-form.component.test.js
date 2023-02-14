
import React from 'react';
import { useHref, MemoryRouter } from 'react-Router-dom';
import { render, fireEvent } from '@testing-library/react';

import SignInForm from '../../../Components/sign-in-form/sign-in-form.component';
import { signInAuthUserWithEmailAndPassword } from '../../../util/firebase/firebase.utils';

jest.mock('../../../util/firebase/firebase.utils', () => ({
  signInAuthUserWithEmailAndPassword: jest.fn(),
}));

describe('SignInForm component', () => {
  it('renders the component', () => {
    const { getByTestId } = render(
      <MemoryRouter >
        <SignInForm />
      </MemoryRouter >
    );

    expect(getByTestId('sign-in-form')).toBeInTheDocument();
  });

  it('submits the form with email and password', async () => {
    const email = 'test@example.com';
    // const password = 'testpassword';

    signInAuthUserWithEmailAndPassword.mockResolvedValue({});

    const { getByLabelText, getByTestId } = render(
      <MemoryRouter >
        <SignInForm />
      </MemoryRouter >
    );

    const emailInput = getByLabelText('email');
    const passwordInput = getByLabelText('Password');
    const form = getByTestId('sign-in-form');

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.submit(form);

    expect(signInAuthUserWithEmailAndPassword).toHaveBeenCalledWith(email,password);
  });
});
// import '@testing-library/jest-dom';
// import{render,screen,cleanup} from'@testing-library/react';
// import SignInForm from '../../../Components/sign-in-form/sign-in-form.component';
// import {userEvent} from'@testing-library/user-event';

// test('test',()=> {expect(true).toBe(true)});