import { TestBed } from '@angular/core/testing';

import { ItemPedidoService } from './item-pedido.service';

describe('ItemPedidoService', () => {
  let service: ItemPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
