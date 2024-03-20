/*
 * @Author: Victor
 * @Date: 2024-03-19 09:59:23
 * @LastEditTime: 2024-03-19 14:55:20
 */

"use client"

import { ListWithCards } from "@/type"
import { ListForm } from "./list-form"
import { useEffect, useState } from "react"
import { ListItem } from "./list-item"

interface ListContainerProps {
	data: ListWithCards[]
	boardId: string
}

export default function ListContainer({ data, boardId }: ListContainerProps) {

	const [orderedData, setOrderedData] = useState(data)

	useEffect(() => {
		setOrderedData(data)
	}, [data])

	return (
		<ol className="flex gap-x-3 h-full">

			{
				orderedData.map((list, index) => (
					<ListItem
						key={list.id}
						index={index}
						data={list}
					/>
				))
			}
			<ListForm />
			<div className="flex-shrink-0 w-1">
			</div>
		</ol>
	)
}