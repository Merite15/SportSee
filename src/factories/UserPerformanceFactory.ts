import { ErrorData } from '@/models/ErrorData';
import UserPerformance from '@/models/user/Performance';

export class UserPerformanceFactory {
  private data: any;

  constructor(data: any, type: string) {
    try {
      if (type === 'api') {
        this.data = new UserPerformance(data);
      } else {
        throw new ErrorData('Erreur 400', 'Données non disponibles');
      }
    } catch (err) {
      this.data = err;
    }
  }
}
