import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { signout } from '../../slice/userSlice';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.user);


    const handleSignout = () => {
        dispatch(signout());
        localStorage.removeItem("user");
    };

    const handleSignin = () => {
        navigate("/signin")
    };
    return (

        <div>
            {user ? (
                <div>
                    <p>{user.hoTen}</p>
                    <button onClick={handleSignout}>Dăng Xuất</button>
                </div>
            ) : (
                <button onClick={handleSignin}>Đăng Nhập</button>
            )}
        </div>
    );
};

export default Header