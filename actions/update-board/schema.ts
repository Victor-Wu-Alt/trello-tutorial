/*
 * @Author: Victor
 * @Date: 2024-03-18 18:21:18
 * @LastEditTime: 2024-03-18 18:24:07
 */
import { z } from "zod";

export const UpdateBoard = z.object({
	title: z.string({
		required_error: "Board title is required",
		invalid_type_error: "Board title must be a string"
	}).min(3, {
		message: "Board title must be at least 3 characters long"
	}),
	id: z.string({
		required_error: "Id is required",
		invalid_type_error: "Id is required"
	})
})