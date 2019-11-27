const Company = require("../models/companyModel");
const factory = require("./handlerFactory");

exports.createCompany = factory.createOne(Company);
exports.getAllCompanies = factory.getAll(Company);
exports.getCompany = factory.getOne(Company);
exports.updateCompany = factory.updateOne(Company);
exports.deleteCompany = factory.deleteOne(Company);
