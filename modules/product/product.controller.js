const products = [
  {
    id: 1,
    name: "Adidas Samba OG Shoes",
    description: "2.000.000 VND",
    image:
      "https://www.outbacksylt.com/files/image/id/29692/fixed/1/w/1000/h/1000/n/adidas-samba-og-white-b75806-1.jpg",
  },
  {
    id: 2,
    name: "Nike Jordan 1",
    description: "2.000.000 VND",
    image: "https://www.glab.vn/storage/products/2023/05/12/645e09068edaf.jpg",
  },
  {
    id: 3,
    name: "Nike Dunk",
    description: "2.500.000 VND",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/413/335/products/duyetfashion-nike-dunk-low-black-white-dd1391-100-dd1503-101-duyet-fashion-8-jpeg-1feca183-0585-412a-ae79-6bb72eebd04a-616ff778-ef3e-4fde-85bd-6988122fa5fc.jpg?v=1654677561477",
  },
  {
    id: 4,
    name: "Nike Blazer",
    description: "1.500.000 VND",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/427/393/products/img-9250.jpg",
  },
];

exports.getAllProducts = (req, res) => {
  res.render('index', {
    title: "NodeJS Ninedev 2024",
    products,
  });
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  res.json(`Ninedev 2024 id: ${hello.findIndex((item) => item.id == id)}`);
};

exports.createProduct = (req, res) => {
  res.render('product/create');
};

exports.updateProduct = (req, res) => {
  res.json("Update");
};

exports.deleteProduct = (req, res) => {
  res.json("Delete");
};
