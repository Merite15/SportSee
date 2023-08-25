import { ErrorData } from '@/models/ErrorData';
import UserSessions from '@/models/user/Sessions';

export class UserSessionsFactory {
  private data: any;

  constructor(data: any, type: string) {
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