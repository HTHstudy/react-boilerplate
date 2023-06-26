import { ACCESS_TOKEN } from '@constants/string';
import { Navigate } from 'react-router-dom';

interface PropsType {
  children: JSX.Element;
}

// 라우터 가드
const AuthRoute = ({ children }: PropsType) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthRoute;
