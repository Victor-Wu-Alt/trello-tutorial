/*
 * @Author: Victor
 * @Date: 2024-03-19 10:08:32
 * @LastEditTime: 2024-03-19 10:15:16
 */

interface ListWrapperProps {
	children: React.ReactNode;
}

export const ListWrapper = ({ children }: ListWrapperProps) => {
	return (
		<li className="shrink-0 h-full w-[272px] select-none">
			{children}
		</li>)
}