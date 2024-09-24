export const validateForm = (title: string, content: string): boolean => {
	return title.trim().length > 0 && content.trim().length > 0
}
