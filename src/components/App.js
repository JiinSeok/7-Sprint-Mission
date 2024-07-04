import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import HomeLayout from '../../page-layout/HomeLayout/HomeLayout';
import Home from '../../pages/HomePage';
import LoginLayout from '../../page-layout/LoginLayout';
import Login from '../../pages/LoginPage';
import SignUpLayout from '../../page-layout/SignupLayout/SignupLayout';
import SignUp from '../../pages/SignupPage';
import ItemsLayout from '../../page-layout/ItemsLayout/ItemsLayout';
import Items from '../../pages/ItemsPage';
import AddItemLayout from '../../page-layout/ItemsAddLayout/ItemsAddLayout';
import AddItem from '../../pages/ItemsAddPage';
import AddBoardLayout from '../../page-layout/ArticlesAddLayout/ArticlesAddLayout';
import BoardsLayout from '../../page-layout/ArticlesBoardLayout/ArticlesBoardLayout';
import AddBoard from '../../pages/ArticlesAddPage';

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<LoginLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/signup" element={<SignUpLayout />}>
            <Route index element={<SignUp />} />
          </Route>
          <Route path="/items" element={<ItemsLayout />}>
            <Route index element={<Items />} />
          </Route>
          <Route path="/additem" element={<AddItemLayout />}>
            <Route index element={<AddItem />} />
          </Route>
          <Route path="boards" element={<BoardsLayout />}>
            <Route />
          </Route>
          <Route path="addboard" element={<AddBoardLayout />}>
            <Route index element={<AddBoard />} />
            <Route path="" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
