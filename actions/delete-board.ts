/*
 * @Author: Victor
 * @Date: 2024-03-12 10:19:43
 * @LastEditTime: 2024-03-12 10:37:48
 */

"use server"


import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";


export async function deleteBoard(id: string) {
	await db.board.delete({
		where: {
			id
		}
	})

	revalidatePath('/organization/org_2dWhFPY6QBBjKSGfT5OlJDfhKzz')
}