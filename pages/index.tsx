import {
	IonContent,
	IonPage,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonApp,
	IonCard,
} from '@ionic/react';

import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<IonApp>
			<IonPage>
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
			</IonPage>
		</IonApp>
	);
};

export default Home;
