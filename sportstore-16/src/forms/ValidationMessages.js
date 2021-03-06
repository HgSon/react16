export const GetMessages = (element) => {
	const messages = [];
	if (element.validity.valueMissing) {
		messages.push("Value required");
	}
	if (element.validity.typeMismatch) {
		messages.push(`Invalid ${element.type}`);
	}
	return messages;
}