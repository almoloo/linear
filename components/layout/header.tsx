import ConnectButton from '@/components/layout/connect-button';

export default function Header() {
	return (
		<header className="flex items-center justify-between">
			<h1>LOGO</h1>
			<ConnectButton />
		</header>
	);
}
