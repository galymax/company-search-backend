import { Router } from 'express';
import { getFilteredCompanies, getSpecialities } from '../controllers/companies.js';
const router = Router();

// get companies
router.get('/', getFilteredCompanies);

// get specialities
router.get('/specialities', getSpecialities);

export default router;
