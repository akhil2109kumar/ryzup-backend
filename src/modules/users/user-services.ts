import User from "./user-model";

class UserCreadentialServices {
    async userAuth({ email, userName }: any) {
        try {
            // Check if the user already exists
            //@ts-ignore
            let {user} = await User.findByCreadentials(email);

            if (user) {
                const token = await user.generateAuthToken();
                return { user, accessToken: token }
            }

            // User doesn't exist, create a new account and generate token
            user = new User({ email, userName });
            await user.save();
            const token = await user.generateAuthToken();

            return {
                token,
                user
            }
        } catch (err) {
            throw err;
        }
    };

}

export const UserCreadentialServicesInstance = new UserCreadentialServices();
