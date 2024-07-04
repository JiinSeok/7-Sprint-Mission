import { Outlet } from 'react-router-dom';
import LoginAndSignupTitle from '../src/components/LoginAndSignupTitle';

export default function LoginLayout() {
  return (
    <div>
      <LoginAndSignupTitle />
      <Outlet />
    </div>
  );
}
