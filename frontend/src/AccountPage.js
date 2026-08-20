import { AiOutlineUser } from "react-icons/ai";

const AccountPage = ({ logoutUser }) => {
  return (
    <main className="page-shell">
      <section className="account-card" aria-labelledby="account-title">
        <div className="account-mark" aria-hidden="true">
          <AiOutlineUser />
        </div>
        <p className="eyebrow">Your profile</p>
        <h1 id="account-title">My account</h1>
        <p>
          You are signed in. Log out when you are finished shopping on this
          device.
        </p>
        <button
          type="button"
          className="button button--danger"
          onClick={logoutUser}
        >
          Logout
        </button>
      </section>
    </main>
  );
};

export default AccountPage;
