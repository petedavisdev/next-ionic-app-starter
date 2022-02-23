/* Functions */
import dynamic from 'next/dynamic';

/* Types */
import type { AppProps } from 'next/app';

/* Components */
import { IonApp, setupIonicReact } from '@ionic/react';

/* Styles */
import '../styles/globals.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

function App({ Component, pageProps }: AppProps) {
	return (
		<IonApp>
			<Component {...pageProps} />
		</IonApp>
	);
}

export default dynamic(() => Promise.resolve(App), {
	ssr: false,
});
