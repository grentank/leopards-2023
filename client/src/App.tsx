import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/HOC/Loader';
import NavigationBar from './components/ui/NavigationBar';
import PrivateRoute from './components/HOC/PrivateRoute';
import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import NotFoundPage from './components/pages/NotFoundPage';
import TransactionsPage from './components/pages/TransactionsPage';
import { useAppDispatch, useAppSelector } from './features/redux/hooks';
import { checkUserThunk } from './features/redux/slices/user/thunkActions';
import loadAllThunk from './features/redux/slices/transaction/loadAllThunk';
import DeleteDialog from './components/ui/DeleteDialog';

function App(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserThunk());
    void dispatch(loadAllThunk());
  }, []);
  return (
    <Container>
      <Loader>
        <>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              element={
                <PrivateRoute isAllowed={user.status === 'guest'} redirectPath="/transactions" />
              }
            >
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Route>
            <Route
              element={<PrivateRoute isAllowed={user.status === 'logged'} redirectPath="/login" />}
            >
              <Route path="/transactions" element={<TransactionsPage />} />
              {/* <Route path="/search" element={<SearchPage />} /> */}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <DeleteDialog />
        </>
      </Loader>
    </Container>
  );
}

export default App;
