import { createAction, props } from '@ngrx/store';

import { IRegister } from '../types/IRegister';
import { ActionType } from './action-types';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{ request: IRegister }>()
);
