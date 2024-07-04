import { Link } from 'react-router-dom';
import pandamarketTitleImg from '../assets/icons/ic_pandamarket-title.svg';

function NavBar() {
  return (
    <div>
      <Link to="/">
        <img src={pandamarketTitleImg} alt="판다마켓 로고 타이틀" />
      </Link>
      <Link to="/article/boards">
        <div>자유게시판</div>
      </Link>
      <Link to="/items">
        <div>중고마켓</div>
      </Link>
      <Link to="/login">
        <div>로그인</div>
      </Link>
    </div>
  );
}

export default NavBar;
