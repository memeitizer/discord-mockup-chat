import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import './Disclaimer.scss';

function Disclaimer() {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div id="disclaimer">
      <h2>DISCLAIMER</h2>
      <p>
        Note that the mean person is the bully version of Yash and totally isn't the real version of Yash. Please don't come to Yash with complaints
        on this Meme-Cord chat, because he is a busy person. Also, these guys can type fast and have good internet, so keep up!
      </p>
      <br />
      <Button onClick={() => setRedirect('/home')}>Get started already!</Button>
    </div>
  );
}

export default Disclaimer;
