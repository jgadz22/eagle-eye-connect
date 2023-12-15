import { connectToDB } from "./mongoose";

export default async function withDBConnection<T>(
  callback: () => Promise<T>
): Promise<T> {
  connectToDB();
  try {
    return await callback();
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}
