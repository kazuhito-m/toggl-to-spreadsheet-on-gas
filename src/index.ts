import GasApplication from './GasApplication';

global.main = () => {
  const application = new GasApplication();
  application.run();
};
