/*
 * @Author: Victor
 * @Date: 2024-03-08 11:09:22
 * @LastEditTime: 2024-03-08 11:12:13
 */


import { Footer } from "./_components/footer"
import { Narbar } from "./_components/navbar"

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full bg-slate-100'>
			<Narbar />
			<main className="pt-40 pb-20 bg-slate-100">
				{children}
			</main>
			<Footer />
		</div >
	)
}

export default MarketingLayout