import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { signout } from '../../slice/userSlice';
import styles from "./Header.module.scss";




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

        <div className={styles.header}>
            <h1 className={styles.brand}>Giang Movie Shop</h1>
            {user ? (
                <div>
                    <p>{user.hoTen}</p>
                    <button onClick={handleSignout}>Đăng Xuất</button>
                </div>
            ) : (
                <button onClick={handleSignin}>Đăng Nhập</button>
            )}
        </div>
    );
};

export default Header