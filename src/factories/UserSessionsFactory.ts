import { ErrorData } from '@/models/ErrorData';
import UserSessions from '@/models/user/Sessions';
import { UserSession } from '@/utils/models/UserSession';

export class UserSessionsFactory {
  data: any;

  constructor(data: UserSession, type: string) {
    try {
      if (type === 'api') {
        this.data = new UserSessions(data);
      } else {
        throw new ErrorData('Erreur 400', 'Données non disponibles');
      }
    } catch (err) {
      this.data = err;
    }
  }
}