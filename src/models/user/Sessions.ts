import { Duration } from '@/utils/types/Duration';
import { UserSession } from '@/utils/models/UserSession';
import { FormatSessionDuration } from '../formater/SessionDuration';

class UserSessions {
  private constructor_id: string;
  private constructor_sessions: Duration[];

  constructor(user: UserSession) {
    this.constructor_id = user.data.userId;
    this.constructor_sessions = user.data.sessions;
  }

  get id(): string {
    return this.constructor_id;
  }

  get sessions(): Duration[] {
    const arrayOfSessions = this.constructor_sessions.map((session) => {
      const data = new FormatSessionDuration(session);
      return { day: data.day, sessionLength: data.sessionLength };
    });
    return arrayOfSessions;
  }
}

export default UserSessions;

