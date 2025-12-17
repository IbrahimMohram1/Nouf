import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18n from "./i18n";

// ensure document dir updates on language change (for RTL) and persist choice
i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  localStorage.setItem("language", lng);
});

// Set initial direction based on saved language
const savedLng = localStorage.getItem("language") || "en";
document.documentElement.dir = savedLng === "ar" ? "rtl" : "ltr";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
