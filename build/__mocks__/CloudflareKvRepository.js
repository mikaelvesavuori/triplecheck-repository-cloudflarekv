"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareKvRepository = void 0;
const tslib_1 = require("tslib");
class CloudflareKvRepository {
    constructor() {
        this.getData = (key) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                if (!key)
                    throw new Error('Missing key!');
                const fetchedData = `{"something":123}`;
                return typeof fetchedData === 'string' && fetchedData !== ''
                    ? JSON.parse(fetchedData)
                    : fetchedData;
            }
            catch (error) {
                console.error(error);
            }
        });
        this.updateData = (type, data) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(type, JSON.stringify(data));
        });
        this.deleteData = (key) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(key);
        });
    }
}
exports.CloudflareKvRepository = CloudflareKvRepository;
//# sourceMappingURL=CloudflareKvRepository.js.map