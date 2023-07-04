const products = [];
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title, size: req.body.size });
    res.redirect('/');
  }

  exports.getProducts = (req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    })  
};

exports.getcontact = (req, res, next) => {
  res.render(('contact'), {
    // prods: products,
    pageTitle: 'Contact',
    path: '/contact',
    // hasProducts: products.length > 0,
    // activeShop: true,
    // productCSS: true
  })
};

exports.postcontact = (req, res, next) => {
  res.redirect('/success');
};

  exports.getsuccess = (req, res, next) => {
    res.render(('success'), {
      // prods: products,
      pageTitle: 'Success Msg',
      path: '/success',
      // hasProducts: products.length > 0,
      // activeShop: true,
      // productCSS: true
    })

};