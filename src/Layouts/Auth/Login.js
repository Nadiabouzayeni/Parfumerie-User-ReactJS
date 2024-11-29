import React from 'react';
import Login from '@react-login-page/page10';
import LoginImg from '@react-login-page/page10/bg.png';
import LoginInnerBgImg from '@react-login-page/page10/inner-bg.jpg';

// Ajouter le style CSS directement dans le composant
const styles = `
  .login-page10 {
    --login-color: #6B8E23;
    --login-inner-height: 460px;
    --login-inner-bg: #6B8E23;
    --login-inner-color: #6B8E23;
    --login-input: #556B2F;
    --login-input-bg: white;
    --login-input-placeholder: #6B8E23;
    --login-input-placeholder-active: white;
    --login-input-bg-hover: #6B8E23;
    --login-input-bg-focus: white;
    --login-input-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
    --login-btn: white;
    --login-btn-bg: #6B8E23;
    --login-btn-hover: #556B2F;
    --login-footer: white;
    --login-icon-color: #556B2F;
    --login-icon-toggle-color: #6B8E23;
    background-color: var(--login-bg);
    color: var(--login-color);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inner-box {
    background-color: var(--login-inner-bg);
    color: var(--login-color);
    padding: 20px;
    border-radius: 8px;
    box-shadow: var(--login-input-shadow);
  }

  .inner-box.signup {
    border: 2px solid var(--login-btn-bg);
  }

  .custom-button {
    color: var(--login-btn); /* Texte blanc */
    background-color: var(--login-btn-bg); /* Fond vert olive */
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .custom-button:hover {
    background-color: var(--login-btn-hover); /* Fond vert foncé au survol */
  }
`;

// Inject CSS into the document head
const injectStyles = () => {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
};

const Demo = () => {
  // Inject styles on component load
  React.useEffect(() => {
    injectStyles();
  }, []);

  return (
    <Login className="login-page10" style={{ backgroundImage: `url(${LoginImg})` }}>
      <Login.InnerBox
        className="inner-box"
        style={{ backgroundImage: `url(${LoginInnerBgImg})` }}
      >
        <button className="custom-button">Login</button>
      </Login.InnerBox>
      <Login.InnerBox
        panel="signup"
        className="inner-box signup"
        style={{ backgroundImage: `url(${LoginInnerBgImg})` }}
      >
        <button className="custom-button">Sign Up</button>
      </Login.InnerBox>
    </Login>
  );
};

export default Demo;
