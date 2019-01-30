import { ApiService } from './api.service';

describe('ApiService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: ApiService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ApiService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
