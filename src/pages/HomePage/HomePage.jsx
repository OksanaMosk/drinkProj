import { useLocation } from 'react-router-dom';
// import { NavLink as BaseNavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

import { HomePageWrapper, NavLink } from './HomePage.styled';

const HomePage = () => {
  const isLoadingAuth = useSelector(state => state.auth.isLoadingAuth);
  const location = useLocation();

  return (
    <HomePageWrapper>
      <section>
        <div>
          <h2>Welcome to the app!</h2>
          <p>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </p>
        </div>

        <div>
          <NavLink state={{ from: location }} to="/signup">
            Sign Up
          </NavLink>
          <NavLink state={{ from: location }} to="/signin">
            Sign In
          </NavLink>
        </div>
      </section>
    </HomePageWrapper>
  );
};
export default HomePage;
