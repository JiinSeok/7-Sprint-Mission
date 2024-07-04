import { Outlet } from 'react-router-dom';
import NavBar from '../../src/common/nav/ui-top-nav/TopNav';

function ItemsLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default ItemsLayout;
