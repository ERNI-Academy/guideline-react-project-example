import {SHOW_MODAL, HIDE_MODAL} from '../constants/constants';
import { Actions } from '../interfaces/appInterfaces';
import { ReactNode } from 'react';

export const showModal = (node: ReactNode): Actions => (
  {type: SHOW_MODAL, value: node});

export const hideModal = (): Actions => (
  {type: HIDE_MODAL});