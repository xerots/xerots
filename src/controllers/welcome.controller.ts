import { Get, JsonController } from 'routing-controllers';
import { ApiResponse, logger } from 'xerots';

@JsonController()
export class WelcomeController {

  @Get('/')
  hello(): ApiResponse {
    logger.info('Thank you for using #xerots!');

    return {
      message: 'Hello World!',
    };
  }

}
