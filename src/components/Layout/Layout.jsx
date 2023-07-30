import { Outlet } from 'react-router-dom';
import { MovieBox } from 'components/MovieGallery/MovieGallery.styled';
import { MovieHeader, MovieNav, MovieNavLink} from './Layout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
const Layout = () => {
    return (
        <>
            <MovieHeader>
                <MovieBox>
                    <MovieNav>
                        <MovieNavLink to="/">Home</MovieNavLink>
                        <MovieNavLink to="/movies">Movies</MovieNavLink>
                    </MovieNav>
                </MovieBox>
            </MovieHeader>
            <main>
                <Suspense fallback={<Loader />}>
                <Outlet />
                </Suspense>
            </main>
        </>
    )
};
export default Layout;