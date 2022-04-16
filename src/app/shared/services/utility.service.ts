import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor(
    public builder: FormBuilder,
    public localStorageService: LocalStorageService,
    public confirmationService: ConfirmationService,
    public messageService: MessageService
  ) {}
}
