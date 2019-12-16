"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateName = (fileExtension = 'jpeg') => {
    return Math.floor(Date.now()).toString().concat('.').concat(fileExtension);
};
//# sourceMappingURL=Image.js.map