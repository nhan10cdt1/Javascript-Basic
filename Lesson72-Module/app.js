// Sử dụng destructoring để lấy export const ,Không phải là inport những thành phần export default.
import logger from "./logger.js";
import { TYPE_LOG, TYPE_ERROR, TYPE_WARN } from "./constants.js";

// import * as constants from "./constants.js";
// console.log(constants);

console.log(typeof logger);

logger("TEST MESSAGE!", TYPE_LOG);