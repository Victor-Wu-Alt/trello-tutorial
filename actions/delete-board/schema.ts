/*
 * @Author: Victor
 * @Date: 2024-03-18 18:21:18
 * @LastEditTime: 2024-03-18 19:11:04
 */
import { z } from "zod";

export const DeleteBoard = z.object({
	id: z.string()
})