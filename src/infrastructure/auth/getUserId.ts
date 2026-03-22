export async function getUserId(): Promise<string> {
  const userId = process.env.DEV_USER_ID;

  if (!userId) {
    throw new Error('DEV_USER_ID is not configured');
  }

  return userId;
}
