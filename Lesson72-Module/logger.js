import { TYPE_LOG, TYPE_ERROR, TYPE_WARN } from "./constants.js";

function logger(log, type = TYPE_LOG) {
    console[type](log);
}

// Lưu ý một module chỉ export được một default
export default logger;