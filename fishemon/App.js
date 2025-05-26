import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { auth } from "./firebase";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInAnonymously(auth);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {user ? (
        <Text>Logged in as: {user.uid}</Text>
      ) : (
        <Button title="Login Anonymously" onPress={handleLogin} />
      )}
    </View>
  );
}