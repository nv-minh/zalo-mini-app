import api, { GetUserInfoReturns } from "zmp-sdk";


export const zaloService = {
    getAccessToken: async (): Promise<string> => {
        try {
            await api.login({});
            return await api.getAccessToken({});
        } catch (error) {
            throw error;
        }
    },
    getUser: async (): Promise<GetUserInfoReturns> => {
        try {
            const response = await api.getUserInfo({});
            return response;
        } catch (error) {
            throw error;
        }
    },
};