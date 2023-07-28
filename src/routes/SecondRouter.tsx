import { Routes, Route } from "react-router-dom";

import { Header } from "../Navbar";
import * as screen from "../pages";
import { ChangePassword } from "../auth";

export const SecondRouter = () => {
  return (
    <>
      <Header />

      <Routes>
        {/* Those screen are in sidebar */}

        <Route Component={screen.MainPage} path="/" />
        <Route Component={screen.UsersPage} path="/users" />
        <Route Component={screen.SupplierPage} path="/supplier" />
        <Route Component={screen.CategorysPage} path="/categories" />
        <Route Component={screen.ProductsPage} path="/products" />
        <Route Component={screen.ProfilesPage} path="/profiles" />

        {/* Those screen are in sidebar in the report part */}

        <Route Component={screen.BalanceSheet} path="/reports/balanceSheet" />
        <Route Component={screen.ProofOfIncome} path="/reports/proofIncome" />
        <Route Component={screen.ReturnsReport} path="/reports/returnsReport" />
        <Route Component={screen.SalesReport} path="/reports/salesReport" />

        {/* That screen is in sidebar */}

        <Route Component={screen.StocksPerWarehouse} path="/warehouse" />

        {/* Those screen are in the main */}

        <Route Component={screen.ProofOfIncomeMain} path="/proofIncome" />
        <Route Component={screen.SalesProductMain} path="/salesProduct" />
        <Route Component={screen.ReturnsMain} path="/returns" />
        <Route Component={screen.ClientListMain} path="/clientList" />

        {/* this is in the dropdown */}

        <Route Component={ChangePassword} path="/changePassword" />
      </Routes>
    </>
  );
};
