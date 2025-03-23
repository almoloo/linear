'use client';

import { useAuth } from '@arcana/auth-react';

export default function ConnectButton() {
	const { loading, connect, user, isLoggedIn, logout } = useAuth();

	const onConnectClick = async () => {
		try {
			await connect(); // Built-in, plug & play login UI
		} catch (err) {
			console.log({ err });
			// Handle error
		}
	};

	const onDisconnectClick = async () => {
		logout();
	};

	if (loading) {
		return <p>Loading...</p>;
	}
	if (!isLoggedIn) {
		return <button onClick={onConnectClick}>Login UI (Built-in)</button>;
	}

	if (isLoggedIn) {
		return <button onClick={onDisconnectClick}>Logout</button>;
	}
}
