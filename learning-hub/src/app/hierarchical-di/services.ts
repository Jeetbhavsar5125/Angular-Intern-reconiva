import { Injectable } from '@angular/core';

// Root provider
@Injectable({
  providedIn: 'root'
})
export class DemoService {
  name = 'Root Service';
}

// Service used to demonstrate separate instances
@Injectable()
export class IsolatedService {
  static idCounter = 1;
  id = IsolatedService.idCounter++;
}

// Unprovided service used for @Optional() test
@Injectable()
export class MissingService {
  name = 'Missing Service';
}
