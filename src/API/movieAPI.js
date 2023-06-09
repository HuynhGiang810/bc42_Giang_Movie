import axiosClient from "./axiosClient"



export const apiGetMovies = async () => {
  const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachPhim", {
    params: {
      maNhom: "GP14",
    },
  });
  return data;
};

export const apiGetMovieSeat = async (maLichChieu) => {
  const { data } = await axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe", {
    params: {
      MaLichChieu: maLichChieu
    },
  });
  return data;
};

export const apiGetBanners = async () => {
  const { data } = await axiosClient.get("/QuanLyPhim/LayDanhSachBanner");
  return data;
};

export const apiGetMovieDetails = async (movieId) => {
  const { data } = await axiosClient.get("/QuanLyPhim/LayThongTinPhim", {
    params: {
      MaPhim: movieId,
    },
  });

  return data;
};


export const apiGetMovieShowTime = async () => {
  const { data } = await axiosClient.get("/QuanLyRap/LayThongTinHeThongRap", {
    params: {
    },
  });

  return data;
};

export const apiGetMovieSchedule = async (movieId) => {
  const { data } = await axiosClient.get("/QuanLyRap/LayThongTinLichChieuPhim", {
    params: {
      MaPhim: movieId,
    },
  });
  return data;
};

export const apiCreateMovie = async (movie) => {
  const formData = new FormData();
  for (let key in movie) {
    formData.append(key, movie[key]);
  }
  formData.append("maNhom", "GP14");

  await axiosClient.post("/QuanLyPhim/ThemPhimUploadHinh", formData);
};

