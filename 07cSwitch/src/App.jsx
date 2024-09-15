export default function App() {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <div>
      <h1>Welcome User!</h1>
    </div>
  ) : (
    <div>
      <h1>Please login</h1>
    </div>
  );
}
 