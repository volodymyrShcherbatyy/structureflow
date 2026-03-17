import { getServerSession as nextAuthGetServerSession } from "next-auth/next";
import { authOptions } from "./authOptions";

export async function getServerSession() {
  return nextAuthGetServerSession(authOptions);
}