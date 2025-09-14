import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonIcon, IonLabel, IonAvatar, IonButton } from '@ionic/react';
import { settings, notifications, helpCircle, logOut } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="container">
          <IonCard>
            <IonCardContent>
              <div className="profile-header">
                <IonAvatar>
                  <img src="data:image/jpeg;base64,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" alt="Profile" />
                </IonAvatar>
                <div className="profile-info">
                  <h2>Student User</h2>
                  <p>student@xoacademy.com</p>
                  <p>Learning since 2024</p>
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Account Settings</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem button>
                <IonIcon icon={settings} slot="start" />
                <IonLabel>Settings</IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon icon={notifications} slot="start" />
                <IonLabel>Notifications</IonLabel>
              </IonItem>
              <IonItem button>
                <IonIcon icon={helpCircle} slot="start" />
                <IonLabel>Help & Support</IonLabel>
              </IonItem>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Learning Stats</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>12</h3>
                  <p>Courses Completed</p>
                </div>
                <div className="stat-item">
                  <h3>48</h3>
                  <p>Hours Learned</p>
                </div>
                <div className="stat-item">
                  <h3>5</h3>
                  <p>Certificates</p>
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          <IonButton expand="block" fill="outline" color="danger">
            <IonIcon icon={logOut} slot="start" />
            Sign Out
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
