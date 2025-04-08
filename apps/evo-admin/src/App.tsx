import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AmbassadorList } from "./ambassador/AmbassadorList";
import { AmbassadorCreate } from "./ambassador/AmbassadorCreate";
import { AmbassadorEdit } from "./ambassador/AmbassadorEdit";
import { AmbassadorShow } from "./ambassador/AmbassadorShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"EVO"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Ambassador"
          list={AmbassadorList}
          edit={AmbassadorEdit}
          create={AmbassadorCreate}
          show={AmbassadorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
