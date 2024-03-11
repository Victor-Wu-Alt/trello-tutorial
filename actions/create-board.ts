/*
 * @Author: Victor
 * @Date: 2024-03-11 20:47:43
 * @LastEditTime: 2024-03-11 21:01:06
 */


"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from 'zod'

const CreateBoard = z.object({
	title: z.string()
})

export async function create(formData: FormData) {
	const { title } = CreateBoard.parse({ title: formData.get('title') })
	await db.board.create(
		{
			data:
				{ title: title }
		}),

		revalidatePath('/organization/org_2dWhFPY6QBBjKSGfT5OlJDfhKzz')
}