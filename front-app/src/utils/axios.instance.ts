import axios from "axios";
import { authStore } from "@src/stores/auth.store";

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
  (response) => response,
  async (error) => {
    const { refreshToken, setTokens, clearTokens } = authStore.getState();
    if (error.response?.status === 401 && refreshToken) {
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
          { refreshToken }
        );
        setTokens(data.accessToken, data.refreshToken);
        error.config.headers.Authorization = `Bearer ${data.accessToken}`;
        return axios(error.config); // 실패한 요청 재시도
      } catch (refreshError) {
        clearTokens();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
// export const useLogout = () => {
//   const { clearTokens } = useAuthStore();

//   return useMutation(() => api.post("/auth/logout"), {
//     onSuccess: () => {
//       clearTokens(); // 토큰 제거
//     },
//   });
// };
