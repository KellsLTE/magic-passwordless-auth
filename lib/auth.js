import { Magic } from "@magic-sdk/admin";
import Iron from "@hapi/iron";
import { MAX_AGE, setTokenCookie } from "./auth-cookie";

export const setLoginSession = async (res, metadata) => {
  const session = {
    ...metadata,
    createdAt: Date.now(),
    maxAge: MAX_AGE,
  };

  const token = await Iron.seal(
    session,
    process.env.TOKEN_SECRET,
    Iron.defaults
  );
  setTokenCookie(res, token);
};
