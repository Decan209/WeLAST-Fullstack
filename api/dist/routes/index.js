"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RepoController_1 = require("../controllers/RepoController");
const router = (0, express_1.Router)();
router.get('/repos', RepoController_1.getRepositories);
exports.default = router;
