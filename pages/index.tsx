import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
} from '@ionic/react';

import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<IonContent>
			<IonCard>
				<IonCardHeader>
					<IonCardSubtitle>Nursing essentials</IonCardSubtitle>
					<IonCardTitle>Crib cards</IonCardTitle>
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

export default Home;
