import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function getUsers() {
  try {
    const result = await sql`SELECT * FROM users`;
    return result;
  } catch (error) {
    console.error("خطأ في جلب البيانات:", error);
    throw new Error("فشل في الاتصال بقاعدة البيانات");
  }
}