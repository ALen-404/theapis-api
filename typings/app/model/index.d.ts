// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDrop from '../../../app/model/drop';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Drop: ReturnType<typeof ExportDrop>;
    User: ReturnType<typeof ExportUser>;
  }
}
