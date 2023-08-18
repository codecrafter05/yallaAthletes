import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>AuthPage</h1>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
      }
    </ThemeProvider>
  );

  // return (
  //   <main>
  //     <h1>AuthPage</h1>
  //     <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
  //     { showSignUp ?
  //         <SignUpForm setUser={setUser} />
  //         :
  //         <LoginForm setUser={setUser} />
  //     }
  //   </main>
  // );
}