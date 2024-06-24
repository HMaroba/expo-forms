import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
   
  },

  container3: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: 'green'
   
  },
  container2: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-start",
   
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  label: {
   
  },
  button: {
    backgroundColor: "#4FA64F",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 12,
    height: 55,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  error: {
    color: "red",
    fontSize: 20,
    marginBottom: 12,
  },
});
