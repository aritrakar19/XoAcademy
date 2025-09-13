import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>XoAcademy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">XoAcademy</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="container">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Welcome to XoAcademy!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>🎉 Hello World!</p>
             
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Get Started</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Your app is ready to go! Start building amazing mobile experiences.</p>
              <IonButton expand="block" fill="solid">
                Start Learning
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
