import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import HomeLayout from '../page-layout/HomeLayout/HomeLayout';
import Home from '../pages/HomePage';
import LoginLayout from '../page-layout/LoginLayout';
import Login from '../pages/LoginPage';
import SignUpLayout from '../page-layout/SignupLayout/SignupLayout';
import SignUp from '../pages/SignupPage';
import ItemsLayout from '../page-layout/ItemsLayout/ItemsLayout';
import Items from '../pages/ItemsPage';
import AddItemLayout from '../page-layout/ItemsAddLayout/ItemsAddLayout';
import AddItem from '../pages/ItemsAddPage';
import AddBoardLayout from '../page-layout/ArticlesAddLayout/ArticlesAddLayout';
import AddBoard from '../pages/ArticlesAddPage';
import BoardsLayout from '../page-layout/ArticlesBoardLayout/ArticlesBoardLayout';
import ArticleId from '../pages/ArticlesIdPage';
import ItemsProductId from '../pages/ItemsProductIdPage';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default function Main() {
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
            <Route path="add" element={<AddItemLayout />}>
              <Route index element={<AddItem />} />
            </Route>
            <Route path=":productId" element={<ItemsProductId />} />
          </Route>
          <Route path="articles">
            <Route path="board" element={<BoardsLayout />} />
            <Route path="add" element={<AddBoard />} />
            <Route path=":articleId" element={<ArticleId />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
