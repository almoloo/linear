'use client';

import { AuthProvider } from '@arcana/auth';
import { arcanaClientId } from './constants';
import { ProvideAuth } from '@arcana/auth-react';

const provider = new AuthProvider(arcanaClientId(), {
	network: 'testnet',
	connectOptions: {
		compact: false,
	},
	alwaysVisible: true,
});

export default function Providers({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <ProvideAuth provider={provider}>{children}</ProvideAuth>;
}
