import { ErrorData } from '@/models/ErrorData';
import UserActivities from '@/models/user/Activities';

export class UserActivitiesFactory {
  private data: any;

  constructor(data: any, type: string) {
    try {
      if (type === 'api') {
        this.data = new UserActivities(data);
      } else {
        throw new ErrorData('Erreur 400', 'Données non disponibles');
      }
    } catch (err) {
      this.data = err;
    }
  }
}
