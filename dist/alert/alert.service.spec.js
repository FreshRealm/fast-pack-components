import { TestBed, inject } from '@angular/core/testing';
import { AlertService } from './alert.service';
import { ToastrService } from 'ngx-toastr';
fdescribe('AuthService', function () {
    var successSpy;
    var component;
    var fixture;
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [AlertService, ToastrService]
        });
        successSpy = spyOn(ToastrService.prototype, 'success');
        fixture = TestBed.createComponent(AlertService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', inject([AlertService], function (service) {
        expect(service).toBeTruthy();
    }));
    describe('#success', function () {
        it('should call toastr success with message and options', function () {
            component.success('success-msg', { 'options': true });
            expect(successSpy).toHaveBeenCalledWith('success-msg', null, { 'options': true });
        });
    });
});
//# sourceMappingURL=alert.service.spec.js.map