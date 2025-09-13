import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { book, laptop, trophy, people } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Academy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Academy</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="container">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Learning Paths</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem button>
                <IonIcon icon={book} slot="start" />
                <IonLabel>Web Development</IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon icon={laptop} slot="start" />
                <IonLabel>Mobile Development</IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon icon={trophy} slot="start" />
                <IonLabel>Certifications</IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon icon={people} slot="start" />
                <IonLabel>Community</IonLabel>
              </IonItem>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Recent Activity</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>📚 Started Ionic Framework Course</p>
              <p>✅ Completed TypeScript Basics</p>
              <p>🏆 Earned React Fundamentals Badge</p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
