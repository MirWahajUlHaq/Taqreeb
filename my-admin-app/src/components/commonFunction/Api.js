import React, { Component } from 'react';

export const API_BASE_URL = "http://localhost:8000/api/v1/";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const VENDOR_LOGIN_API = getApiUrl("auth/vendorSignin");
export const VENDOR_SIGNUP_API = getApiUrl("auth/vendorSignup");
export const ADMIN_LOGIN_API = getApiUrl("auth/adminSignin");
export const CATEGORY_ADD_API = getApiUrl("admin/addCategory");
export const GETCATEGORY_API = getApiUrl("user/getCategory");
export const ADD_PRODUCT_API = getApiUrl("vendor/addProduct");
export const UPLOAD_PRODUCT_IMAGE_API = getApiUrl("vendor/uploadImage");
export const GET_PRODUCT_API = getApiUrl("vendor/getProduct");
export const DELETE_PRODUCT_API = getApiUrl("vendor/deleteProduct");
export const ADMIN_PRODUCT_API = getApiUrl("admin/allProducts");
export const APPROVE_PRODUCT_API = getApiUrl("admin/productApprove");
export const USER_ADD_API = getApiUrl("admin/addUsers");
export const USER_LIST_API = getApiUrl("admin/allUsers");
export const VENDOR_ORDER_GET_API = getApiUrl("vendor/getOrders");
export const APPROVE_ORDER_API = getApiUrl("vendor/orderApprove");

export const ADMIN_ORDER_GET_API = getApiUrl("admin/allOrders");


export const ADD_REVIEW = getApiUrl("vendor/addReviews");
export const GET_REVIEW_API = getApiUrl("vendor/getReviews");
export const DELETE_REVIEW_API = getApiUrl("vendor/deleteReview");



export const LOGOUT_API = getApiUrl("logout");


