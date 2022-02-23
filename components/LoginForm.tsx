import { IonButton } from '@ionic/react';
import Link from 'next/link';

export function LoginForm() {
	return (
		<form action="">
			<h1>Log in</h1>
			<label htmlFor="user">Email or membership number</label>
			<div className="validate">
				<input id="user" type="text" />
			</div>

			<label htmlFor="password">Password</label>
			<div className="validate">
				<input id="password" type="password" />
			</div>
			<Link href="/">
				<IonButton>Log in</IonButton>
			</Link>
		</form>
	);
}
