import axios from 'axios';
import { loginStart, loginFailed, loginSuccess, registerStart, registerFailed, registerSuccess, 
    changePasswordStart, changePasswordSuccess, changePasswordFailed } from './authSlice';
import { getQuestionsFailed, getQuestionsStart, getQuestionsSuccess, addQuestionStart, addQuestionSuccess, addQuestionFailed, getQuestionsAdminStart, getQuestionsAdminSuccess, getQuestionsAdminFailed } from './questionSlice';
import { changeUserInfoFailed, changeUserInfoStart, changeUserInfoSuccess, getUserInfoFailed, getUserInfoStart, getUserInfoSuccess } from './userSlice';
import { submitStart, submitSuccess, submitFailed } from './submit';
import { getHistoryStart, getHistorySuccess, getHistoryFailed } from './history';
import { getTimesStart, getTimesSuccess, getTimesFailed } from './timesSlice';
import { getPostsStart, getPostsSuccess, getPostsFailed, addPostStart, addPostSuccess, addPostFailed, getPostDetailStart, getPostDetailSuccess, getPostDetailFailed, searchPostsStart, searchPostFailed, searchPostSuccess} from './postSlice';
import { addCommentStart, addCommentSuccess, addCommentFailed, replyCommentStart, replyCommentSuccess, replyCommentFailed } from './commentSlice';
import { addSchoolFailed, addSchoolStart, addSchoolSuccess, changeSchoolNameStart, changeSchoolNameSuccess, getSchoolsFailed, getSchoolsStart, getSchoolsSuccess } from './schoolSlice';
import { addDocumentFailed, addDocumentStart, addDocumentSuccess, deleteDocumentFailed, deleteDocumentStart, deleteDocumentSuccess, editDocumentFailed, editDocumentStart, editDocumentSuccess, getDocumentsFailed, getDocumentsStart, getDocumentsSuccess } from './documentSlice';
import { uploadAvatarFailed, uploadAvatarStart, uploadAvatarSuccess } from './avatarSlice';
import { getDashboardFailed, getDashboardStart, getDashboardSuccess, getStatisticFailed, getStatisticStart, getStatisticSuccess } from './dashboardSlice';
import { editQuestionStart, editQuestionSuccess, editQuestionFailed } from './questionSlice'
import { getAccountsStart, getAccountsSuccess, getAccountsFailed, changeStatusAccountStart, changeStatusAccountSuccess, changeStatusAccountFailed } from './accountSlice'

export const loginUser = async(user, dispatch,navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post('/login',user);
        dispatch(loginSuccess(res.data));
        if(user.email === 'admin@gmail.com') navigate('/homeadmin')
        else navigate('/');
    }
    catch (err) {
        dispatch(loginFailed());
        alert('Email or password is incorrect');
    }
}

export const registerUser = async(user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        await axios.post('/register',user);
        dispatch(registerSuccess());
        alert('B???n ???? ????ng k?? t??i kho???n th??nh c??ng. Vui l??ng ????ng nh???p!');
        navigate('/login');
    }
    catch(err){
        dispatch(registerFailed());
        alert('Error: ' + err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const changePasswordUser = async(password, dispatch, navigate) => {
    dispatch(changePasswordStart());
    try{
        const res = await axios.post('/change/password',password,{
            headers: { ContentType: 'application/json'}
        })
        dispatch(changePasswordSuccess(res.data));
        alert('M???t kh???u c???a b???n ???? thay ?????i th??nh c??ng!')
        navigate('/')
    }catch(err){
        dispatch(changePasswordFailed());
        alert('Error: M???t kh???u c???a b???n ch??a ???????c thay ?????i!');
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const changeUserInfo = async(accessToken, newInfo, dispatch, navigate) => {
    dispatch(changeUserInfoStart());
    try{
        const res = await axios.post('/user/edit',newInfo,{
            headers: { ContentType: 'application/json'},
            token: `Bearer ${accessToken}`
        })
        dispatch(changeUserInfoSuccess(res.data));
        alert('Th??ng tin c???a b???n ???? ???????c thay ?????i th??nh c??ng!')
        navigate('/')
    }catch(err){
        dispatch(changeUserInfoFailed());
        alert('Error: Th??ng tin c???a b???n ch??a ???????c thay ?????i');
    }
}


export const getHistory = async (dispatch, navigate) => {
    dispatch(getHistoryStart());
    try {
        const res = await axios.get('get_history_list');
        dispatch(getHistorySuccess(res.data));
        navigate('/historylist');
    }catch(err){
        dispatch(getHistoryFailed());
        alert(err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const getHistoryDetail = async (id, dispatch, navigate, url) => {
    dispatch(getTimesStart());
    try {
        const res = await axios.get(`get_history_details?id=${id}`);
        dispatch(getTimesSuccess(res.data));
        navigate(url);
    }catch(err){
        dispatch(getTimesFailed());
        alert('Error: ' + err.message);
    }
}

export const getUserInfo = async (accessToken, dispatch,navigate) => {
    dispatch(getUserInfoStart());
    try {
        const res = await axios.get('/user/detail',{
            headers: {token: `Bearer ${accessToken}`},
        })
        dispatch(getUserInfoSuccess(res.data));
    }catch(err){
        dispatch(getUserInfoFailed());
        alert(err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const uploadAvatar = async(formData, dispatch) => {
    dispatch(uploadAvatarStart());
    try{
        const res = await axios.post('/uploadAvatar',formData,{
            headers: { ContentType: 'multipart/form-data' },
        })
        dispatch(uploadAvatarSuccess(res.data));
        alert('Th??m ???nh th??nh c??ng!')
    }catch(err){
        dispatch(uploadAvatarFailed());
        alert(err.message);
    }
}

export const submit = async(answers, dispatch, navigate) => {
    dispatch(submitStart());
    try{
        const res = await axios.post('question/submit',answers,{
            headers: { ContentType: 'application/json'}
        })
        dispatch(submitSuccess(res.data));
        navigate('/result')
    }catch(err){
        dispatch(submitFailed());
        alert(err.message);
    }
}

export const getAllQuestions = async (accessToken, dispatch, navigate) => {
    dispatch(getQuestionsStart());
    try {
        const res = await axios.get('/question/all?size=20',{
            headers: { ContentType: 'application/json'},
            token: `Bearer ${accessToken}`
        })
        dispatch(getQuestionsSuccess(res.data));
    }catch(err){
        dispatch(getQuestionsFailed());
        alert(err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const getQuestionsAdmin = async (page, dispatch, navigate) => {
    dispatch(getQuestionsAdminStart());
    try {
        const res = await axios.get(`/getListQuestion/${page}/5`,{
            headers: { ContentType: 'application/json'},
        })
        dispatch(getQuestionsAdminSuccess(res.data));
    }catch(err){
        dispatch(getQuestionsAdminFailed());
        alert(err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const addQuestion = async(formData, dispatch) => {
    dispatch(addQuestionStart());
    try{
        const res = await axios.post('/question/create',formData,{
            headers: { ContentType: 'multipart/form-data' },
        })
        dispatch(addQuestionSuccess(res.data));
        alert('Th??m c??u h???i th??nh c??ng!')
    }catch(err){
        dispatch(addQuestionFailed());
        if(err.message === 'Request failed with status code 400')
            alert('C??u h???i ???? t???n t???i');
            else alert(err.message);
    }
}

export const getAllPosts = async (page, dispatch, navigate) => {
    dispatch(getPostsStart());
    try {
        const res = await axios.get(`/getAllPost/${page}/5`,{
            headers: { ContentType: 'application/json'},
        })
        dispatch(getPostsSuccess(res.data));
    }catch(err){
        dispatch(getPostsFailed());
        alert(err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const searchPost = async (keyword, dispatch) => {
    dispatch(getPostsStart());
    try {
        const res = await axios.get(`/searchPost?key=${keyword}`)
        dispatch(getPostsSuccess(res.data));
    }catch(err){
        dispatch(getPostsFailed());
        alert(err.message);
    }
}

export const getPostDetail = async (id, dispatch, navigate) => {
    dispatch(getPostDetailStart());
    try {
        const res = await axios.get(`/getPostDetail/${id}`)
        dispatch(getPostDetailSuccess(res.data));
        navigate('/postdetail')
    }catch(err){
        dispatch(getPostDetailFailed());
        alert(err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const addComment = async(newComment, dispatch) => {
    dispatch(addCommentStart());
    try{
        const res = await axios.post('/addComment',newComment,{
            headers: { ContentType: 'application/json' },
        })
        dispatch(addCommentSuccess(res.data));
        alert('Th??m comment th??nh c??ng!')
    }catch(err){
        dispatch(addCommentFailed());
        alert('Error: Comment ch??a ???????c th??m ' + err.message);
    }
}

export const replyComment = async(subComment, dispatch) => {
    dispatch(replyCommentStart());
    try{
        const res = await axios.post('/addSubComment',subComment,{
            headers: { ContentType: 'application/json' },
        })
        dispatch(replyCommentSuccess(res.data));
        alert('Th??m ph???n h???i th??nh c??ng!')
    }catch(err){
        dispatch(replyCommentFailed());
        alert('Error: Comment ch??a ???????c th??m ' + err.message);
    }
}

export const postQuestion = async(accessToken, newQuestion, dispatch) => {
    dispatch(addPostStart());
    try{
        const res = await axios.post('/create/post',newQuestion,{
            headers: { ContentType: 'application/json'},
            token: `Bearer ${accessToken}`
        })
        dispatch(addPostSuccess(res.data));
        alert('C??u h???i c???a b???n ???? ???????c th??m th??nh c??ng!')
    }catch(err){
        dispatch(addPostFailed());
        alert('Error: C??u h???i c???a b???n ch??a ???????c th??m');
    }
}

export const getAllSchools = async (dispatch, navigate) => {
    dispatch(getSchoolsStart());
    try {
        const res = await axios.get('getListSchool',{
            headers: { ContentType: 'application/json'},
        })
        dispatch(getSchoolsSuccess(res.data));
    }catch(err){
        dispatch(getSchoolsFailed());
        alert(err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const addSchool = async(newSchool, dispatch) => {
    dispatch(addSchoolStart());
    try{
        const res = await axios.post('/createSchool',newSchool,{
            headers: { ContentType: 'application/json'},
        })
        dispatch(addSchoolSuccess(res.data));
        alert('Tr?????ng/vi???n ???? th??m th??nh c??ng!')
    }catch(err){
        dispatch(addSchoolFailed());
        alert('Error: ' + err.message);
    }
}

export const changeSchoolName = async(newName, dispatch) => {
    dispatch(changeSchoolNameStart());
    try{
        const res = await axios.post('/editSchool',newName,{
            headers: { ContentType: 'application/json'}
        })
        dispatch(changeSchoolNameSuccess(res.data));
        alert('Thay ?????i th??nh c??ng!')
    }catch(err){
        dispatch(changePasswordFailed());
        alert('Error: ' + err.message);
    }
}

export const getAllDocuments = async (dispatch, navigate) => {
    dispatch(getDocumentsStart());
    try {
        const res = await axios.get('getListDocument',{
            headers: { ContentType: 'application/json'},
        })
        dispatch(getDocumentsSuccess(res.data));
    }catch(err){
        dispatch(getDocumentsFailed());
        alert(err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const addDocument = async(newDocument, dispatch) => {
    dispatch(addDocumentStart());
    try{
        const res = await axios.post('/createDocument',newDocument,{
            headers: { ContentType: 'multipart/form-data'},
        })
        dispatch(addDocumentSuccess(res.data));
        alert('T??i li???u ???? ???????c th??m th??nh c??ng!')
    }catch(err){
        dispatch(addDocumentFailed());
        alert('Error: ' + err.message);
    }
}

export const editDocument = async(id, newDocument, dispatch) => {
    dispatch(editDocumentStart());
    try{
        const res = await axios.post(`/editDocument/${id}`,newDocument,{
            headers: { ContentType: 'multipart/form-data'}
        })
        dispatch(editDocumentSuccess(res.data));
        alert('Thay ?????i th??nh c??ng!')
    }catch(err){
        dispatch(editDocumentFailed());
        alert('Error: ' + err.message);
    }
}

export const editQuestion = async(id, editNewQuestion, dispatch) => {
    dispatch(editQuestionStart());
    try{
        const res = await axios.post(`/question/edit?questionNumber=${id}`, editNewQuestion, {
            headers: { ContentType: 'application/json'},
        })
        dispatch(editQuestionSuccess(res.data));
        alert('Thay ?????i th??nh c??ng!')
    }catch(err){
        dispatch(editQuestionFailed());
        alert('Error: ' + err.message);
    }
}

export const deleteDocument = async(id, dispatch) => {
    dispatch(deleteDocumentStart());
    try{
        const res = await axios.post(`/deleteDocument/${id}`)
        dispatch(deleteDocumentSuccess(res.data));
        alert('X??a th??nh c??ng!')
    }catch(err){
        dispatch(deleteDocumentFailed());
        alert('Error: ' + err.message);
    }
}

export const getDashboard = async (dispatch, navigate) => {
    dispatch(getDashboardStart());
    try {
        const res = await axios.get('getDashboard',{
            headers: { ContentType: 'application/json'},
        })
        dispatch(getDashboardSuccess(res.data));
    }catch(err){
        dispatch(getDashboardFailed());
        alert(err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const getStatisticByFilter = async (min, max, dispatch, navigate) => {
    dispatch(getStatisticStart());
    try {
        const res = await axios.get(`getListHistoryFilter?min=${min}&max=${max}`,{
            headers: { ContentType: 'application/json'},
        })
        dispatch(getStatisticSuccess(res.data));
    }catch(err){
        dispatch(getStatisticFailed());
        alert(err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const getStatisticBySearch = async (mssv, dispatch, navigate) => {
    dispatch(getStatisticStart());
    try {
        const res = await axios.get(`getListHistorySearch?search=${mssv}`,{
            headers: { ContentType: 'application/json'},
        })
        dispatch(getStatisticSuccess(res.data));
    }catch(err){
        dispatch(getStatisticFailed());
        alert(err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const getAllAccounts = async (dispatch, navigate) => {
    dispatch(getAccountsStart());
    try {
        const res = await axios.get('getListAccount')
        dispatch(getAccountsSuccess(res.data));
    }catch(err){
        dispatch(getAccountsFailed());
        alert(err.message);
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}

export const changeStatusAccount = async (newAccountStatus, dispatch, navigate) => {
    dispatch(changeStatusAccountStart());
    try {
        const res = await axios.post('editStatusAccount', newAccountStatus,  {
            headers: { ContentType: 'application/json'},
        })
        dispatch(changeStatusAccountSuccess(res.data))
    } catch(err) {
        dispatch(changeStatusAccountFailed());
        alert(err.message)
        if(err.message === 'Request failed with status code 403') navigate('/login')
    }
}