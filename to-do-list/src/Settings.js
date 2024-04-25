function Settings() {
  return (
    <div className="page Settings">
      <h1>Settings</h1>
      <p>Welcome to the Settings page. Here you can customize your experience:</p>
      <div>
        <h2>Theme</h2>
        <label>
          <input type="radio" name="theme" value="light" /> Light Mode
        </label>
        <label>
          <input type="radio" name="theme" value="dark" /> Dark Mode
        </label>
      </div>
    </div>
  );
}

export default Settings;