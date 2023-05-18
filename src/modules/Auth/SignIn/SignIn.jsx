import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { signin } from "../../../slice/userSlice";

const schema = yup.object({
  taiKhoan: yup.string().required("Tài Khoản Không Được Để Trống"),
  matKhau: yup.string().required("Mật Khẩu Không Được Để Trống").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Mật Khẩu Không Hợp Lệ")
});

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const { user, isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = (values) => {
    dispatch(signin(values));
  };

  const onError = (errors) => {
    console.log(errors);
  };

  if (user) {
    const url = searchParams.get("DefaulsUrl") || "/";
    return <Navigate to={url} />;
  }
  return (
    <div>
      <h1>Đăng Nhập</h1>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <input
            type="text"
            placeholder="Tài Khoản"
            {...register("taiKhoan")}

          // {...register("taiKhoan", {
          //   required: {
          //     value: true,
          //     message: "Tài khoản không được để trống",
          //   },
          // })}
          />
          {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Mật khẩu"
            {...register("matKhau")}

          // {...register("matKhau", {
          //   required: {
          //     value: true,
          //     message: "Mật khẩu không được để trống",
          //   },
          //   pattern: {
          //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          //     message:
          //       "Mật khẩu ít nhất 8 kí tự, phải có 1 chữ hoa, 1 chữ thường và 1 số",
          //   },
          // })}
          />
          {errors.matKhau && <p>{errors.matKhau.message}</p>}
        </div>

        {/* Hiển thị lỗi server trả về. VD: trường hợp sai tài khoản hoặc mật khẩu */}
        {error && <p>{error}</p>}

        <button disabled={isLoading}>Dang Nhap</button>
      </form>
    </div>
  )
}

export default SignIn