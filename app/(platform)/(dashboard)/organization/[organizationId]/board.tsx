/*
 * @Author: Victor
 * @Date: 2024-03-12 10:13:25
 * @LastEditTime: 2024-03-12 10:15:46
 */

import { deleteBoard } from "@/actions/delete-board"
import { FormDelete } from "./form-delete"

interface BoardProps {
	title: string,
	id: string
}

export const Board = ({ title, id }: BoardProps) => {
	const deleteBoardWithId = deleteBoard.bind(null, id)
	return (
		<form action={deleteBoardWithId} className="flex items-center gap-x-2">
			<p>
				Board title:{title}
			</p>
			<FormDelete></FormDelete>
		</form>
	)
}