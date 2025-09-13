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
                  <img src="https://via.placeholder.com/80" alt="Profile" />
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
