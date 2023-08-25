import { FormatSessionActivity } from '../formater/SessionActivity';
import { Activity as ActivityType } from '../../utils/types/Activity';
import { UserActivity } from '@/utils/models/UserActivity';

class UserActivities {
  private constructor_id: string;
  private constructor_sessions: ActivityType[];

  constructor(user: UserActivity) {
    this.constructor_id = user.data.userId;
    this.constructor_sessions = user.data.sessions;
  }

  get id(): string {
    return this.constructor_id;
  }

  get sessions(): ActivityType[] {
    const arrayOfSessions = this.constructor_sessions.map(
      (session) => new FormatSessionActivity(session)
    );
    return arrayOfSessions;
  }
}

export default UserActivities;
