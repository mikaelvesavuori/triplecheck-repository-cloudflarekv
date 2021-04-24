"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareKvRepository = void 0;
const tslib_1 = require("tslib");
class CloudflareKvRepository {
    constructor() {
        this.getData = (key) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const fetchedData = yield TRIPLECHECK.get(key);
            return typeof fetchedData === 'string' && fetchedData !== ''
                ? JSON.parse(fetchedData)
                : fetchedData;
        });
        this.updateData = (type, data) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield TRIPLECHECK.put(type, JSON.stringify(data));
        });
        this.deleteData = (key) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield TRIPLECHECK.delete(key);
        });
    }
}
exports.CloudflareKvRepository = CloudflareKvRepository;
//# sourceMappingURL=CloudflareKvRepository.js.map