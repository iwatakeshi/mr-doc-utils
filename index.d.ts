import Log from './src/Log';

type LogClass = Log;

declare namespace Util {
  const Log: LogClass
}

export default Util;