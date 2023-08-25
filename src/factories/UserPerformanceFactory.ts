import { ErrorData } from '@/models/ErrorData';
import UserPerformance from '@/models/user/Performance';
import { UserPerformance as PerfType } from '@/utils/models/UserPerformance';

export class UserPerformanceFactory {
  data: any;

  constructor(data: PerfType, type: string) {
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
