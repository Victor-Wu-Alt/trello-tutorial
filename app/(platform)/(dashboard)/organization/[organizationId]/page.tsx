/*
 * @Author: Victor
 * @Date: 2024-03-09 15:26:40
 * @LastEditTime: 2024-03-11 20:56:59
 */

import { db } from "@/lib/db"
import { Board } from "./board"
import { Form } from "./form"

const OrganizationIdPage = async () => {

	const boards = await db.board.findMany()

	return (
		<div className="flex flex-col space-y-4">
			<Form />
			<div className="space-y-2">
				{boards.map((board) => (
					<Board key={board.id} title={board.title} id={board.id} />
				))}
			</div>
		</div>
	)
}

export default OrganizationIdPage