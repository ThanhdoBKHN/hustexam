import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserInfo } from "../../../redux/apiRequest";
import './UserInfo.css' 
function UserInfo(){
    const userLog = useSelector((state) => state.auth.login?.currentUser)
    const user = useSelector(state => state.user.user.userInfo);
    const [username, setUsername] = useState('');
    const [mssv, setMssv] = useState('');
    const [school, setSchool] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newInfo = {
      name: username,
    }
    const handleSave = (e) => {
      console.log(newInfo);
        e.preventDefault();
        changeUserInfo(userLog.accessToken,newInfo,dispatch,navigate);
    }

    return(
        <div className="col" id="column-info-user" style={{height: 'max-content', margin: '20px 0px 30px 220px',
            padding: '10px 0px 20px 30px', width: '60%'}}>
          <h2>Thông tin cá nhân</h2>
          <div>
            <label htmlFor="username">Họ và tên:</label>
            <input type="text" id="username" name="username" defaultValue={user.username} 
              onChange = { (e) =>setUsername(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="mssv">Mã số sinh viên: </label>
            <input type="text" id="mssv" name="mssv" defaultValue={user.mssv}
              onChange = { (e) =>setMssv(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="school">Trường/Viện: </label>
            <input type="text" id="school" name="school" onChange = { (e) =>setSchool(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="dob">Ngày sinh: </label>
            <input type="date" id="dob" name="dob"/>
          </div>
          <div style={{display: 'flex'}}>
            <label htmlFor="address">Địa chỉ: </label>
                <select name="address" id="address" onChange = { (e) =>setAddress(e.target.value)}>
                <option value="An Giang">An Giang</option>
                <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                <option value="Bắc Giang">Bắc Giang</option>
                <option value="Bắc Kạn">Bắc Kạn</option>
                <option value="Bạc Liêu">Bạc Liêu</option>
                <option value="Bắc Ninh">Bắc Ninh</option>
                <option value="Bến Tre">Bến Tre</option>
                <option value="Bình Định">Bình Định</option>
                <option value="Bình Dương">Bình Dương</option>
                <option value="Bình Phước">Bình Phước</option>
                <option value="Bình Thuận">Bình Thuận</option>
                <option value="Bình Thuận">Bình Thuận</option>
                <option value="Cà Mau">Cà Mau</option>
                <option value="Cao Bằng">Cao Bằng</option>
                <option value="Đắk Lắk">Đắk Lắk</option>
                <option value="Đắk Nông">Đắk Nông</option>
                <option value="Điện Biên">Điện Biên</option>
                <option value="Đồng Nai">Đồng Nai</option>
                <option value="Đồng Tháp">Đồng Tháp</option>
                <option value="Đồng Tháp">Đồng Tháp</option>
                <option value="Gia Lai">Gia Lai</option>
                <option value="Hà Giang">Hà Giang</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Hà Tĩnh">Hà Tĩnh</option>
                <option value="Hải Dương">Hải Dương</option>
                <option value="Hậu Giang">Hậu Giang</option>
                <option value="Hòa Bình">Hòa Bình</option>
                <option value="Hưng Yên">Hưng Yên</option>
                <option value="Khánh Hòa">Khánh Hòa</option>
                <option value="Kiên Giang">Kiên Giang</option>
                <option value="Kon Tum">Kon Tum</option>
                <option value="Lai Châu">Lai Châu</option>
                <option value="Lâm Đồng">Lâm Đồng</option>
                <option value="Lạng Sơn">Lạng Sơn</option>
                <option value="Lào Cai">Lào Cai</option>
                <option value="Long An">Long An</option>
                <option value="Nam Định">Nam Định</option>
                <option value="Nghệ An">Nghệ An</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Ninh Thuận">Ninh Thuận</option>
                <option value="Phú Thọ">Phú Thọ</option>
                <option value="Quảng Bình">Quảng Bình</option>
                <option value="Quảng Bình">Quảng Bình</option>
                <option value="Quảng Ngãi">Quảng Ngãi</option>
                <option value="Quảng Ninh">Quảng Ninh</option>
                <option value="Quảng Trị">Quảng Trị</option>
                <option value="Sóc Trăng">Sóc Trăng</option>
                <option value="Sơn La">Sơn La</option>
                <option value="Tây Ninh">Tây Ninh</option>
                <option value="Thái Bình">Thái Bình</option>
                <option value="Thái Nguyên">Thái Nguyên</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                <option value="Tiền Giang">Tiền Giang</option>
                <option value="Trà Vinh">Trà Vinh</option>
                <option value="Tuyên Quang">Tuyên Quang</option>
                <option value="Vĩnh Long">Vĩnh Long</option>
                <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                <option value="Yên Bái">Yên Bái</option>
                <option value="Phú Yên">Phú Yên</option>
                <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
                <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
                <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
                <option value="Tp.Hà Nội">Tp.Hà Nội</option>
                <option value="TP.HCM">TP HCM</option>
                </select>
          </div>
        <button className="btn-save" onClick={handleSave}>Lưu thay đổi</button>
        </div>
    )
}

export default UserInfo;