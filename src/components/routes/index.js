import Dashboard from "../pages/Dashboard";
import Notifications from "../pages/NavPages/Notifications";
import Analytics from "../pages/NavPages/Analytics";
import Residents from "../pages/NavPages/Residents";
import Staff from "../pages/NavPages/Staff";
import AtHome from "../pages/NavPages/AtHome";
import UK from "../pages/NavPages/UK";
import AuthPage from "../../auth/AuthPage";

export const privateRoutes = [
    {path: '/', component: Dashboard, exact: true}, //Заявки
    {path: '/notifications', component: Notifications, exact: true}, //Уведомления
    {path: '/Analytics', component: Analytics, exact: true}, //Аналитика
    {path: '/Residents', component: Residents, exact: true}, //Жители
    {path: '/Staff', component: Staff , exact: true}, //Сотрудники
    {path: '/AtHome', component: AtHome, exact: true}, //Дома
    {path: '/UK', component: UK , exact: true}, //УК
]

export const publicRoutes = [
    {path: '/', component: AuthPage, exact: true}
]