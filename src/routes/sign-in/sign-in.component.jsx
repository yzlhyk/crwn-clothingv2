import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';

export default function SignIn() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <div>

    <div>Sign In page</div>
    <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  )
}
