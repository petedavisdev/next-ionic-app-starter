import { IonContent } from '@ionic/react';
import type { NextPage } from 'next';
import { LoginForm } from '../components/LoginForm';

const Login: NextPage = () => {
	return (
		<IonContent>
			<LoginForm />
		</IonContent>
	);
};

export default Login;
