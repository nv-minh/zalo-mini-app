import { zaloService, authenticationService, userService } from 'services';
import { SIGN_IN_URL } from "../constants/api";
import { SignRequest } from "../types/api";
import axiosCommon from "./axios-service";

export interface SignInResponse {
    id: number;
    username: string;
    accessToken: string;
    type: string;
    refreshToken: string;
}

const authenticationService = {
    signIn: async (params: SignRequest): Promise<SignInResponse> => {
        return axiosCommon({
            method: "POST",
            url: SIGN_IN_URL,
            data: params,
        })
            .then((res) => res.data)
            .catch((error) => {
                throw error;
            });
    },
};

export default authenticationService;

export const login = async () => {
    try {
        let tokenZaloRes;
        if (import.meta.env.MODE === MODE.PRODUCTION) {
            tokenZaloRes = await zaloService.getAccessToken();
        }

        const loginRes = await authenticationService.signIn({
            token: tokenZaloRes,
        });

        localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, loginRes.accessToken);

        const userRes = await userService.getUserInfo();
        return userRes;
    } catch (error) {
        throw error;
    }
};
