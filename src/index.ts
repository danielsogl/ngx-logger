import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {NGXLogger, LoggerConfig} from './logger.service';
import {NGXLoggerMock} from './logger.service.mock';

export {NGXLoggerMock} from './logger.service.mock';
export {NGXLogger, LoggerConfig} from './logger.service';


@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ]
})
export class LoggerModule {
  static forRoot(config: LoggerConfig | null | undefined): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        {provide: LoggerConfig, useValue: config || {}},
        NGXLogger,
        NGXLoggerMock
      ]
    };
  }
}
