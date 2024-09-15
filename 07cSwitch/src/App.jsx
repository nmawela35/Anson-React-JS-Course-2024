export default function App() {
  const USER_STATUS = "ACCOUNT_DISABLED";

  switch (USER_STATUS) {
    
    case "NOT_VERIFIED":
      return (
        <div>
          <h3>You are not verified</h3>
        </div>
      );

    case "VERIFIED":
      return (
        <div>
          <h3>You are verified, congrats</h3>
        </div>
      );

    case "ACCOUNT_DISABLED":
      return (
        <div>
          <h3>Account Disabled</h3>
        </div>
      );

    default:
      return (
        <div>
          <h3>Contact System administrator</h3>
        </div>
      );
  }
}
