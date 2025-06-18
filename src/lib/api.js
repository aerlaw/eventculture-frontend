import axios from "axios";

const api = axios.create({
  baseURL: "https://vercel.com/aerlaws-projects/eventculture-backend/api", // ✅ On pointe bien sur l'API du backend
});

export default api;
