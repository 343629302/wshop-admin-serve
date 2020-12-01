import {
  HttpException,
  HttpStatus,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

//全局数据验证
export const Validation = new ValidationPipe({
  transform: true,
  exceptionFactory: (error: ValidationError[]) => {
    let message = '';
    if (error && error.length) {
      const messageArr = Object.values(error[0].constraints);
      message = messageArr[0];
    } else {
      message = '参数错误';
    }
    return new HttpException(
      {
        message: message,
        type: 'error',
      },
      HttpStatus.BAD_REQUEST,
    );
  },
});
