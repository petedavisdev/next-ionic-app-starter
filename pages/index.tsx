import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
} from '@ionic/react';

import type { NextPage } from 'next';
import Link from 'next/link';

const Index: NextPage = () => {
	return (
		<IonContent>
			<Link href="login">Log out</Link>

			<h1>Home</h1>

			<IonCard>
				<IonCardHeader>
					<IonCardSubtitle>Lorem ipsum</IonCardSubtitle>
					<IonCardTitle>Ion Card</IonCardTitle>
				</IonCardHeader>

				<IonCardContent>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
					temporibus quibusdam minus repudiandae, quam natus perspiciatis
					tempore fugiat nesciunt earum quas ea iure perferendis architecto
					porro assumenda, praesentium, quidem mollitia.
				</IonCardContent>
			</IonCard>
		</IonContent>
	);
};

export default Index;
