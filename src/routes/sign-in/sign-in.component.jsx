import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase.utils';

export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }
  return (
    <div>

    <div>Sign In page</div>
    <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  )
}
