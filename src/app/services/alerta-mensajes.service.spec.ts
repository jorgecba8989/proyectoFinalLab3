import { TestBed } from '@angular/core/testing';

import { AlertaMensajesService } from './alerta-mensajes.service';

describe('AlertaMensajesService', () => {
  let service: AlertaMensajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertaMensajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
