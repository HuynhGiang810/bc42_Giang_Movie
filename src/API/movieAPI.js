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


export const apiGetMovieShowTime = async (movieId) => {
  const { data } = await axiosClient.get("/QuanLyRap/LayThongTinHeThongRap", {
    params: {
      MaPhim: movieId,
    },
  });

  return data;
};

export const apiGetMovieSchedule = async (cinemaId) => {
  const { data } = await axiosClient.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP14", {
    params: {
      MaPhim: cinemaId,
    },
  });
  return data;
};

