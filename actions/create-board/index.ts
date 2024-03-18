/*
 * @Author: Victor
 * @Date: 2024-03-12 14:07:42
 * @LastEditTime: 2024-03-18 14:44:40
 */


"use server"

import { auth } from "@clerk/nextjs"
import { InputType, ReturnType } from "./types"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { createSafeAction } from "@/lib/create-safe-action"
import { CreateBoard } from "./schema"

const handler = async (data: InputType): Promise<ReturnType> => {
	const { userId, orgId } = auth()

	if (!userId || !orgId) {
		return {
			error: 'Unauthorized'
		}
	}

	const { title, image } = data
	const [
		imageId,
		imageThumbUrl,
		imageFullUrl,
		imageLinkHtml,
		imageUserName
	] = image.split("|")


	if (!imageId || !imageThumbUrl || !imageFullUrl || !imageLinkHtml || !imageUserName) {
		return {
			error: 'Missing fields,Failed to create board'
		}
	}

	let board

	try {
		board = await db.board.create({
			data: {
				title,
				orgId,
				imageId,
				imageThumbUrl,
				imageFullUrl,
				imageLinkHtml,
				imageUserName
			}
		})
	} catch (error) {
		return {
			error: 'Internal Server Error'
		}
	}

	revalidatePath(`/board/${board.id}`)

	return { data: board }
}


export const createBoard = createSafeAction(CreateBoard, handler)