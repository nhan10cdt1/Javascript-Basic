// import { TYPE_LOG, TYPE_ERROR, TYPE_WARN } from "./constants.js";

// function logger(log, type = TYPE_LOG) {
//     console[type](log);
// }

// // Lưu ý một module chỉ export được một default
// export default logger;

// export ra vô số biến tương tự như bên dưới.
// export const TYPE_LOG = "log";
// export const TYPE_WARN = "warn";
// export const TYPE_ERROR = "error";

// import file bên ngoài.
import { TYPE_LOG } from "./constants.js";

function logger(log, type = "log") {
    console[type](log);
}

export default logger;