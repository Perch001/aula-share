import React from 'react';
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";

const AppRouter = () => {
    const selectUser = useSelector(state => state.auth.auth);
    return (
        <>
            {
                selectUser
                ?
                    <Routes>
                        <Route>
                            {privateRoutes.map(route =>
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    Component={route.component}
                                />
                            )}
                        </Route>
                    </Routes>
                :
                    <Routes>
                        <Route>
                            {publicRoutes.map(route =>
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    Component={route.component}
                                />
                            )}
                        </Route>
                    </Routes>
            }
        </>
    );
};

export default AppRouter;