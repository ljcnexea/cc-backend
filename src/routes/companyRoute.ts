import { Router } from 'express';

import { isSuperAdmin } from 'src/middleware/onlySuperadmin';

import {
  createCompany,
  getAllCompanies,
  createBrand,
  getAllBrands,
  createOneCompany,
  createOneBrand,
  deleteCompany,
  getCompanyById,
  editCompany,
  getBrand,
  editBrand,
  getOptions,
} from 'src/controller/companyController';

const router = Router();

router.post('/createCompany', isSuperAdmin, createCompany);
router.get('/getCompany/:id', isSuperAdmin, getCompanyById);
router.get('/getCompanies', isSuperAdmin, getAllCompanies);
router.post('/createBrand', isSuperAdmin, createBrand);
router.get('/getBrands', isSuperAdmin, getAllBrands);
router.get('/getOptions', isSuperAdmin, getOptions);
router.get('/getBrand/:id', isSuperAdmin, getBrand);
router.post('/createOneCompany', isSuperAdmin, createOneCompany);
router.post('/createOneBrand', isSuperAdmin, createOneBrand);
router.post('/createCompany', isSuperAdmin, createCompany);
router.post('/createBrand', isSuperAdmin, createBrand);
router.patch('/editCompany', isSuperAdmin, editCompany);
router.patch('/editBrand', isSuperAdmin, editBrand);

router.delete('/deleteCompany/:id', isSuperAdmin, deleteCompany);

export default router;
