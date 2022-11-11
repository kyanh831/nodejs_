import React, { Component } from 'react';

import { Routes, Route } from 'react-router-dom';

import HomePage from './components/Home/HomePage';


import LoginPage from './components/Share/LoginPage';


import AdminHomePage from './components/Admin/AdminHome/AdminHomePage';
import AdminBlogPage from './components/Admin/BlogManage/AdminBlogPage';
import AdminTransactionPage from './components/Admin/TransactionManage/AdminTransactionPage';
import AdminProductPage from './components/Admin/ProductManage/AdminProductPage';
import AdminUserPage from './components/Admin/UserManage/AdminUserPage';
import { AdminChatPage } from './components/Admin/AdminChat/AdminChatPage';
import { ProductDetailContent } from './components/Product/ProductDetailContent';
import { Navbar } from './components/Share/Navbar';
import { Footer } from './components/Share/Footer';
import BlogPage from './components/Blog/BlogPage';
import { BlogDetailPage } from './components/Blog/BlogDetailPage';
import ContactPage from './components/Contact/ContactPage';
import AboutPage from './components/About/AboutPage';
import CartPage from './components/Cart/CartPage';
import ProductPage from './components/Product/ProductPage';


export default class App extends Component {
  render() {
    return (
      <>


        <Routes>
          {/* this area admin */}
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/admin/blog-manage" element={<AdminBlogPage />} />
          <Route path="/admin/transaction-manage" element={<AdminTransactionPage />} />
          <Route path="/admin/product-manage" element={<AdminProductPage />} />
          <Route path="/admin/user-manage" element={<AdminUserPage />} />
          <Route path="/admin/chat" element={<AdminChatPage />} />
          
          {/* this area user */}
          <Route path="/" element={<HomePage />} exact />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product-detail/:productId" element={<ProductDetailContent />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog-detail/:id" element={<BlogDetailPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>

      </>
    );
  }
}

