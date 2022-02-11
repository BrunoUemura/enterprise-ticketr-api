import RabbitmqServer from '@src/util/rabbitmq/RabbitmqServer';
import RabbitmqController from '@src/application/controller/rabbitmq/RabbitmqController';

(async () => {
  const server = new RabbitmqServer(process.env.RABBITMQ_URL);
  await server.start();
  await server.consume('user', async message => {
    const object = JSON.parse(message.content.toString());
    await RabbitmqController.handleEvent(object);
  });
})();
