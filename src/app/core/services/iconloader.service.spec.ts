import { TestBed } from '@angular/core/testing';

import { IconloaderService } from './iconloader.service';

describe('IconloaderService', () => {
  let service: IconloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
