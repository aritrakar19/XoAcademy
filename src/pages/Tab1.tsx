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
              <IonCardTitle>Hello World!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>🎉 Welcome to XoAcademy!</p>
             
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
