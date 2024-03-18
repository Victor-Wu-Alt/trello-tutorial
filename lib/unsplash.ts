/*
 * @Author: Victor
 * @Date: 2024-03-18 13:31:05
 * @LastEditTime: 2024-03-18 13:32:29
 */

import { createApi } from 'unsplash-js'

export const unsplash = createApi({
	accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!,
	fetch: fetch
})