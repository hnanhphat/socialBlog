import React from "react";

const AccountPage = () => {
  return (
    <div id="account" className="account">
      <div className="container">
        <div className="account__form">
          <h3 className="title">Sign in to Te quiero</h3>
          <div className="social">
            <button>fb</button>
            <button>gg</button>
          </div>
          <p className="note">or use your email account:</p>
          <form>
            <div className="form__group form__group--email">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form__group form__group--password">
              <input type="password" name="password" placeholder="password" />
            </div>
            <button type="submit">SIGN IN</button>
          </form>
        </div>
        <div className="account__shape">
          <h3 className="title">Hello, Friend!</h3>
          <p className="txt">
            Enter your personal details
            <br />
            and start journey with us
          </p>
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
