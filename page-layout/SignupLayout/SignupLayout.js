import { Outlet } from 'react-router-dom';
import LoginAndSignupTitle from '../../src/components/LoginAndSignupTitle';

export default function SignUpLayout() {
  return (
    <div>
      <LoginAndSignupTitle />
      <Outlet />
    </div>
  );
}
