// Sử dụng destructoring để lấy export const ,Không phải là inport những thành phần export default.
// import logger from "./logger.js";
// import logger from "./logger/index.js";
// import { logger2 } from "./logger/index.js";
// import { TYPE_LOG, TYPE_ERROR, TYPE_WARN } from "../constants.js";

// import * as constants from "./constants.js";
// console.log(constants);

// console.log(typeof logger);
// logger2("TEST MESSAGE!", constants.TYPE_LOG);

//import những thành phần export default.
import logger from "./logger.js";

// import cách 1 những thành phần không export default.
import { TYPE_ERROR, TYPE_WARN, TYPE_LOG } from "./constants.js";

// import theo cách 2.
// import * as constants from "./constants.js";

logger("message test", "log");