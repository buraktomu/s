// src/api/index.js

const BASE_URL = 'http://192.168.68.114:8888/index.php';

export const getCategories = () =>
  fetch(`${BASE_URL}?endpoint=categories`).then(res => res.json());

export const getProducts = () =>
  fetch(`${BASE_URL}?endpoint=products`).then(res => res.json());

export const getSocials = () =>
  fetch(`${BASE_URL}?endpoint=socials`).then(res => res.json());

export const getStoreInfo = () =>
  fetch(`${BASE_URL}?endpoint=store-info`).then(res => res.json());

export const getAboutImages = () =>
  fetch(`${BASE_URL}?endpoint=about-images`).then(res => res.json());