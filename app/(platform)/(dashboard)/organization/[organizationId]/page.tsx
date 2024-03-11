/*
 * @Author: Victor
 * @Date: 2024-03-09 15:26:40
 * @LastEditTime: 2024-03-11 10:42:51
 */

import { db } from "@/lib/db"


const OrganizationIdPage = () => {

	async function create(formDatre: FormData) {
		"use server"
		const title = formDatre.get('title') as string
		await db.board.create(
			{
				data:
					{ title: title }
			})

	}

	return (
		<div>
			<form action={create}>
				<input
					id='title'
					name='title'
					required
					placeholder="Enter a board title"
					className="border-black border p-1" />
			</form>
		</div>
	)
}

export default OrganizationIdPage