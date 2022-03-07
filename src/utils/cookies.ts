import Cookies from 'js-cookie'

//* auth
export const saveAuthCookie = (value: string) => Cookies.set('auth', value)
export const getAuthCookie = () => Cookies.get('auth')
export const deleteAuthCookie = () => Cookies.remove('auth')

export const cookieStringToObject = (cookieString: string | undefined) => {
	const cookies: { [key: string]: string } = {}
	if (cookieString) {
		const itemString = cookieString?.split(/\s*;\s*/)
		itemString.forEach(pairs => {
			const pair = pairs.split(/\s*=\s*/)
			cookies[pair[0]] = pair.splice(1).join('=')
		})
	}
	return cookies
}
