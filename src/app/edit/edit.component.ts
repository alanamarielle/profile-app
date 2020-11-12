import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(private profileService: ProfileService, private router: Router) {}
  newUserProfile: UserProfile;
  ngOnInit(): void {
    this.newUserProfile = this.profileService.getUserProfile();
  }
  setProfile = (): void => {
    this.profileService.setUserProfile(this.newUserProfile);
    this.router.navigate(['/profile']);
  };
}
