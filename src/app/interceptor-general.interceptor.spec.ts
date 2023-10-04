import { TestBed } from '@angular/core/testing';

import { InterceptorGeneralInterceptor } from './interceptor-general.interceptor';

describe('InterceptorGeneralInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorGeneralInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorGeneralInterceptor = TestBed.inject(InterceptorGeneralInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
