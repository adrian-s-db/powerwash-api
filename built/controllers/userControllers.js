var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var User = require('../models/user');
var createUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var newUser, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User.create(req.body)];
            case 1:
                newUser = _a.sent();
                res.status(201);
                res.send(newUser);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                res.status(500);
                console.error(e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var uid, user, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                uid = req.params.uid;
                return [4 /*yield*/, User.findOne({ uid: uid })];
            case 1:
                user = _a.sent();
                res.send(user);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                res.status(500);
                console.error(e_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var updatedMachinesArr, updatedUser, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                updatedMachinesArr = req.body.user.savedMachines.includes(req.body.machine.washingMachineCode) ?
                    req.body.user.savedMachines.filter(function (id) { return id !== req.body.machine.washingMachineCode; }) :
                    req.body.user.savedMachines.concat(req.body.machine.washingMachineCode);
                return [4 /*yield*/, User.findById(req.body.user._id).exec()];
            case 1:
                updatedUser = _a.sent();
                updatedUser.savedMachines = updatedMachinesArr;
                updatedUser.save();
                res.send(updatedUser);
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                res.status(500);
                console.error(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var deleteAllUsers = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var deleted, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User.deleteMany({})];
            case 1:
                deleted = _a.sent();
                res.send(deleted);
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                res.status(500);
                console.error(e_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getAllUsers = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var users, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User.find({})];
            case 1:
                users = _a.sent();
                res.send(users);
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                res.status(500);
                console.error(e_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
module.exports = { getUser: getUser, createUser: createUser, updateUser: updateUser, getAllUsers: getAllUsers, deleteAllUsers: deleteAllUsers };