import Company from '../models/Company.js';

// filter by name and specialities
async function getFilteredCompanies(req, res) {
  const { name, specialities } = req.query;
  const query = {};
  if (name) {
    query.name = new RegExp(name, 'i');
  }
  if (specialities) {
    query.specialities = { $in: specialities.split(',') };
  }
  const companies = await Company.find(query).sort('name');
  res.json(companies);
}

// get list of available specialities
async function getSpecialities(req, res) {
  const specialities = await Company.distinct('specialities');
  res.json(specialities);
}

export { getFilteredCompanies, getSpecialities };