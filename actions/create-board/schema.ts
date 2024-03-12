/*
 * @Author: Victor
 * @Date: 2024-03-12 13:53:43
 * @LastEditTime: 2024-03-12 13:57:49
 */


import { z } from "zod";

export const CreateBoard = z.object({
	title: z.string({
		required_error: "Board title is required",
		invalid_type_error: "Board title must be a string"
	}).min(3, {
		message: "Board title must be at least 3 characters long"
	})
})