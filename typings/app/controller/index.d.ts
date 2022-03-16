// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDrop from '../../../app/controller/drop';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    drop: ExportDrop;
    user: ExportUser;
  }
}
