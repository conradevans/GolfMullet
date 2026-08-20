const AccountPage = ({ setIsLoggedIn, logoutUser }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Account Page</h1>
      <button
        onClick={logoutUser}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "1px solid #ccc",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AccountPage;
