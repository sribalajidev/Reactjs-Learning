import { useState } from "react";

function useSessionStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default function UseSessionStorageHook() {
  const [token, setToken] = useSessionStorage("token", "");

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>Use SessionStorage Hook</h2>
      <input
        type="text"
        value={token}
        placeholder="Enter session token"
        onChange={(e) => setToken(e.target.value)}
      />
      <p>Stored Token: {token || "Not set yet"}</p>
    </div>
  );
}
