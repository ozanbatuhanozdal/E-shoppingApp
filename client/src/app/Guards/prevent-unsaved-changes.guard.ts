import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(component: UserProfileComponent): boolean | UrlTree {
    if(component.editForm.dirty){
      return confirm('Are you sure to continue ? Any unsaved changes will be lost.. ');
    }
    return true;
  }
  
}
