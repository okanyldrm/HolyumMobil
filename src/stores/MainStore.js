import {observable, action} from 'mobx';

class MainStore {
  @observable tekstilProducts = [
    {
      id: 1,
      name: 'Yünlü Kazak',
      img: [
        {
          id: 1,
          imageUrl:
            'https://productimages.hepsiburada.net/l/37/500/10572906430514.jpg',
        },
        {
          id: 2,
          imageUrl:
            'https://productimages.hepsiburada.net/l/37/500/10572906463282.jpg',
        },
        {
          id: 3,
          imageUrl:
            'https://productimages.hepsiburada.net/l/37/500/10572906496050.jpg',
        },
      ],

      desc:
        'kazak açıklama kazak açıklama kazak açıklama kazak açıklama kazak açıklama kazak açıklama kazak açıklama kazak açıklama kazak açıklama kazak açıklama',
      price: 20,
      category: 'tekstil',
    },
    {
      id: 2,
      name: 'Siyah Tshirt',
      img: [
        {
          id: 1,
          imageUrl:
            'https://productimages.hepsiburada.net/l/44/1000/10812269297714.jpg',
        },
        {
          id: 2,
          imageUrl:
            'https://productimages.hepsiburada.net/l/25/600-800/10134437101618.jpg',
        },
      ],

      desc: 'LC Waikiki Erkek T-Shirt',
      price: 29.99,
      category: 'tekstil',
    },
    {
      id: 3,
      name: 'Kısa Jean',
      img: [
        {
          id: 1,
          imageUrl:
            'https://productimages.hepsiburada.net/l/54/1000/11170043002930.jpg',
        },
        {
          id: 2,
          imageUrl:
            'https://productimages.hepsiburada.net/l/54/1000/11170043035698.jpg',
        },
        {
          id: 3,
          imageUrl:
            'https://productimages.hepsiburada.net/l/54/1000/11170043068466.jpg',
        },
      ],

      desc: 'Koton Erkek Mark Straight Fit Jean Pantolon',
      price: 69.99,
      category: 'tekstil',
    },
    {
      id: 4,
      name: 'Kareli Gomlek',
      img: [
        {
          id: 1,
          imageUrl:
            'https://productimages.hepsiburada.net/s/56/1000/11270319964210.jpg',
        },
        {
          id: 2,
          imageUrl:
            'https://productimages.hepsiburada.net/s/56/1000/11270320062514.jpg',
        },
      ],

      desc: 'Mavi Erkek Kareli Siyah Gömlek',
      price: 89.99,
      category: 'tekstil',
    },
  ];
  @observable mutfakProduct = [
    {
      id: 1,
      name: 'Gümüş Kaşık',
      img: [
        {
          id: 1,
          imageUrl:
            'https://cdn.krc.com.tr/image/cdndata/187/0/500.01.01.04681.jpg',
        },
      ],
      desc: 'Takım gümüş kaşık',
      price: 23,
      category: 'mutfak',
    },
    {
      id: 2,
      name: 'Gümüş Çatal',
      img: [
        {
          id: 1,
          imageUrl:
            'https://st1.myideasoft.com/shop/bc/36/myassets/products/136/plastik-catal-800x800.jpg?revision=1603289775',
        },
      ],

      price: 23,
      desc: 'Takım gümüş çatal',
      category: 'mutfak',
    },
    {
      id: 3,
      name: 'Blender',
      img: [
        {
          id: 1,
          imageUrl:
            'https://cdn.tekzen.com.tr/images/product/tefal/2779888/tefal-blendforce-ii-bl438831-cam-surahi-blender-800-w-siyah_1000x1000.jpg',
        },
        {
          id: 2,
          imageUrl:
            'https://cdn.tekzen.com.tr/images/product/tefal/2779888/tefal-blendforce-ii-bl438831-cam-surahi-blender-800-w-siyah_1000x1000_2.jpg',
        },
      ],

      price: 1.199,
      desc: 'Tefal Blendforce 2 Cam Sürahi Blender 800 W',
      category: 'mutfak',
    },
  ];
  @observable teknolojiProduct = [
    {
      id: 1,
      name: 'Iphone 11',
      img: [
        {
          id: 1,
          imageUrl:
            'https://www.arcelik.com.tr/content/dam/arcelik-tr/arcelikTurkeyProductCatalog/commerce/global/5426-Elektronik/5438-Telefon/6927-Cep-Telefonu/7961521600-iPhone-11-64GB-Kirmizi/7961521600-LO1-20190924-093204.png',
        },
        {
          id: 2,
          imageUrl:
            'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1_large.jpg',
        },
      ],

      price: 7.199,
      desc: 'iphone 11 64 gb',
      category: 'teknoloji',
    },
    {
      id: 2,
      name: 'Macbook Air',
      img: [
        {
          id: 1,
          imageUrl:
            'https://productimages.hepsiburada.net/s/49/500/10983949860914.jpg',
        },
        {
          id: 2,
          imageUrl:
            'https://productimages.hepsiburada.net/s/49/1500/10983949926450.jpg',
        },
        {
          id: 3,
          imageUrl:
            'https://productimages.hepsiburada.net/s/49/1500/10983950024754.jpg',
        },
      ],

      price: 9.999,
      desc: 'Apple Macbook Air M1 Çip 8GB 256GB macOS 13',
      category: 'teknoloji',
    },
    {
      id: 3,
      name: 'MSI Monitor',
      img: [
        {
          id: 1,
          imageUrl:
            'https://productimages.hepsiburada.net/s/39/1500/10607264727090.jpg',
        },
        {
          id: 2,
          imageUrl:
            'https://productimages.hepsiburada.net/s/39/1500/10607264825394.jpg',
        },
        {
          id: 3,
          imageUrl:
            'https://productimages.hepsiburada.net/s/39/1500/10607264890930.jpg',
        },
        {
          id: 4,
          imageUrl:
            'https://productimages.hepsiburada.net/s/39/1500/10607264956466.jpg',
        },
      ],

      price: 1200,
      desc:
        'MSI Optix MAG322CR 31.5 180HZ 1ms (HDMI+Display+Type-C) FreeSync Curved Full HD Monitör',
      category: 'teknoloji',
    },
  ];

  @observable currentProduct = {
    id: 1,
    name: 'Iphone 11',
    img: [
      {
        id: 1,
        imageUrl:
          'https://www.arcelik.com.tr/content/dam/arcelik-tr/arcelikTurkeyProductCatalog/commerce/global/5426-Elektronik/5438-Telefon/6927-Cep-Telefonu/7961521600-iPhone-11-64GB-Kirmizi/7961521600-LO1-20190924-093204.png',
      },
      {
        id: 2,
        imageUrl:
          'https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113155-1_large.jpg',
      },
    ],

    price: 7.199,
    desc: 'iphone 11 64 gb',
    category: 'teknoloji',
  };

  @observable allcategories = [
    {id: 1, name: 'Tekstil'},
    {id: 2, name: 'Teknoloji'},
    {id: 3, name: 'Mutfak'},
  ];

  @observable currentCategory = '';

  @action changeCurrentCategory({categoryName}) {
    //console.log(categoryName);
    this.currentCategory = categoryName;
    this.changeProduct(this.currentCategory);
    // console.log(this.products);
  }

  @action changeProduct(categoryName) {
    switch (categoryName) {
      case 'Tekstil':
        this.products = this.tekstilProducts;
        break;
      case 'Teknoloji':
        this.products = this.teknolojiProduct;
        break;
      case 'Mutfak':
        this.products = this.mutfakProduct;
        break;
    }
  }

  @action changeCurrentProduct(searchProduct) {
    switch (searchProduct.categoryname) {
      case 'tekstil':
        this.currentProduct = this.tekstilProducts.find(function (product) {
          return product.id == searchProduct.searchProductId;
        });

        break;
      case 'teknoloji':
        this.currentProduct = this.teknolojiProduct.find(function (product) {
          return product.id == searchProduct.searchProductId;
        });
        break;
      case 'mutfak':
        this.currentProduct = this.mutfakProduct.find(function (product) {
          return product.id == searchProduct.searchProductId;
        });
        break;
    }
  }
}

const store = new MainStore();

export default store;
