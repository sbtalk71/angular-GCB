import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("call the real service", () => {
    expect(service.registerUser(null)).toContain("Data");
  });

  it("call fake service", () => {
    spyOn(service, 'registerUser').withArgs(null).and.returnValue("submitted successfully");
    expect(service.registerUser(null)).toContain("success");
  });
});
