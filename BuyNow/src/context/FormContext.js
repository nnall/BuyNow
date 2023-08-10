import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "login",
    1: "Sign-Up",
    2: "FirstLogin",
    3: "FirstLogin-2",
    4: "Dashboard",
    5: "Vehicles",
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  return (
    <FormContext.Provider value={{ title, page, setPage, data, setData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
