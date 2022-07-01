import { Magic } from "@magic-sdk/admin"

export default async function login (req, res)
{
    const magic = new Magic(process.env.SECRET_KEY);
    const deToken = req.headers.authorization.substr(7);
    const metadata = await magic.users.getMetadataByToken(deToken)
    await setLoginSession(res, metadata)
  res.send({ done: true });
}
