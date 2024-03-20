/*
 * @Author: Victor
 * @Date: 2024-03-18 18:21:18
 * @LastEditTime: 2024-03-19 10:47:34
 */
import { z } from "zod";

export const CreateList = z.object({
	title: z.string({
		required_error: "Title is required",
		invalid_type_error: "Title must be a string"
	}).min(3, {
		message: "Title must be at least 3 characters long"
	}),
	boardId: z.string()
})