import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Alana Frank',
    contact: 'amf@aol.com',
    bio: 'Brunch is best!',
  };
  constructor() {}

  getUserProfile = () => {
    return this.userProfile;
  };
  setUserProfile = (userProfile: UserProfile) => {
    this.userProfile = userProfile;
  };
}
