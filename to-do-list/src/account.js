function Account() {
  return (
    <div className="Account">
      <h1>Account</h1>
      <p>Welcome to your Account page. Here you can update your information:</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
export default Account;