import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { AlertService } from './alert.service';
import { ToastrService } from 'ngx-toastr';

fdescribe('AuthService', () => {
  let successSpy: jasmine.Spy;
  let component: AlertService;
  let fixture: ComponentFixture<AlertService>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertService, ToastrService]
    });

    successSpy = spyOn(ToastrService.prototype, 'success');

    fixture = TestBed.createComponent(AlertService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));

  describe('#success', () => {
    it('should call toastr success with message and options', () => {
      component.success('success-msg', { 'options': true });

      expect(successSpy).toHaveBeenCalledWith('success-msg', null, { 'options': true });
    });
  });
});
