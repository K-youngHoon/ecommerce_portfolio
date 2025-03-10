import axios from "axios";
import { authStore } from "@src/stores/auth.store";
import { IApiResponse } from "@src/const";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// 요청 인터셉터: 토큰 자동 추가
api.interceptors.request.use((config) => {
  const { accessToken } = authStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// 응답 인터셉터: 토큰 만료 시 자동 갱신
api.interceptors.response.use(
  async (response) => {
    if (response.data.error) {
      return Promise.reject(new Error(response.data.error.message));
    }
    return response;
  },
  async (error) => {
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    const { refreshToken, setTokens, clearTokens } = authStore.getState();
    if (!refreshToken) {
      return Promise.reject(error);
    }

    try {
      const { data } = await axios.post<
        IApiResponse<{ accessToken: string; refreshToken: string }>
      >(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, { refreshToken });

      if (data.error || !data.data) {
        throw new Error(data.error?.message);
      }

      setTokens(data.data.accessToken, data.data.refreshToken);

      error.config.headers.Authorization = `Bearer ${data.data.accessToken}`;

      return axios(error.config);
    } catch (refreshError) {
      clearTokens();
      return Promise.reject(refreshError);
    }
  }
);

export { api };
// export const useLogout = () => {
//   const { clearTokens } = useAuthStore();

//   return useMutation(() => api.post("/auth/logout"), {
//     onSuccess: () => {
//       clearTokens(); // 토큰 제거
//     },
//   });
// };
