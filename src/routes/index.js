import HomeAdmin from '../pages/Admin/home_admin/Home_Admin';
import HomeUser from '../pages/User/home_user/Home_User';
import TakeExam from '../pages/User/TakeExam/Take_Exam';
import Login from '../pages/Authentication/login/login';
import Result from '../pages/User/Result/Result';
import Signup from '../pages/Authentication/signup/signup';
import ChangePassword from '../pages/Authentication/change_password/changePassword';
import UserInfo from '../pages/User/user_info_detailed/UserInfo';
import HistoryDetail from '../pages/User/history_detail/HistoryDetail';
import HistoryList from '../pages/User/history_list/HistoryList';
import Forum from '../pages/User/Q&A/Forum';
import PostDetail from '../pages/User/Q&A/PostDetail';
import School from '../pages/Admin/School/School';
import Document from '../pages/Admin/Document/Document';
import DocumentUser from '../pages/User/document/DocumentUser';
import Dashboard from '../pages/Admin/Dashboard/Dashboard';
import Statistic from '../pages/Admin/Statistic/Statistic';
import Account from '../pages/Admin/Account/Account';

const publicRoutes = [
    { path: '/login', component: Login, layout: null},
    { path: '/signup', component: Signup, layout: null},
    { path: '/', component: HomeUser},
    { path: '/changepw', component: ChangePassword},
    { path: '/takeexam', component: TakeExam},
    { path: '/result', component: Result},
    { path: '/userinfo', component: UserInfo},
    { path: '/historydetail', component: HistoryDetail},
    { path: '/historylist', component: HistoryList},
    { path: '/forum', component: Forum},
    { path: '/postdetail', component: PostDetail},
    { path: '/document', component: DocumentUser},
    { path: '/homeadmin', component: HomeAdmin, layout: 'admin'},
    { path: '/school', component: School, layout: 'admin'},
    { path: '/documentAdmin', component: Document, layout: 'admin'},
    { path: '/dashboard', component: Dashboard, layout: 'admin'},
    { path: '/statistic', component: Statistic, layout: 'admin'},
    { path: '/historydetailAdmin', component: HistoryDetail, layout: 'admin'},
    { path: '/account', component: Account, layout: 'admin'}
]

const privateRoutes = []

export { publicRoutes, privateRoutes }