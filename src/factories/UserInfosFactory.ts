import { ErrorData } from '@/models/ErrorData';
import UserInfos from '@/models/user/Infos';

export class UserInfosFactory {
  private data: any;

  constructor(data: any, type: string) {
    try {
      if (type === 'api') {
        this.data = new UserInfos(data);
      } else {
        throw new ErrorData('Erreur 400', 'Données non disponibles');
      }
    } catch (err) {
      this.data = err;
    }
  }
}

