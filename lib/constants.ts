export const arcanaClientId = () => {
	const clientId = process.env.NEXT_PUBLIC_ARCANA_CLIENT_ID;
	if (!clientId) throw new Error('Arcana client id variable is unavailable!');
	return clientId;
};
