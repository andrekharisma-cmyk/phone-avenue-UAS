# db/seeds.rb
Product.destroy_all

Product.create!([
  { name: "iPhone 15 Pro Max",     brand: "Apple",   price: 16990000, old_price: 18000000, rating: "4.9/5", tag: "Premium",    category: "smartphone", image: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg",   description: "Flagship terbaru Apple dengan chip A17 Pro." },
  { name: "Galaxy S24 Ultra",      brand: "Samsung", price: 15990000, old_price: 18000000, rating: "4.8/5", tag: "Premium",    category: "smartphone", image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/114/MTA-158938197/samsung_samsung_galaxy_s24_ultra_5g_ram_12-256gb_-_garansi_resmi_full03_ghzmsoto.jpg", description: "S Pen + Galaxy AI dalam satu genggaman." },
  { name: "Galaxy Z Fold 5",       brand: "Samsung", price: 15990000, old_price: 18000000, rating: "4.6/5", tag: "Premium",    category: "smartphone", image: "https://www.planetgadget.store/media/wysiwyg/blog/post/g/a/galaxy_z_fold_5.jpg", description: "Layar lipat terbaik Samsung." },
  { name: "Xiaomi 14 Pro Series",  brand: "Xiaomi",  price: 10990000, old_price: 12000000, rating: "4.8/5", tag: "Xiaomi",    category: "smartphone", image: "https://gizmologi.id/wp-content/uploads/2023/10/Xioami-14-series-860x753.jpg", description: "Kamera Leica dengan performa Snapdragon Elite." },
  { name: "Sonic Echo Buds Pro",   brand: "Avenue",  price:  2990000, old_price:  3500000, rating: "4.7/5", tag: "Best Seller",category: "aksesoris",  image: "https://m.media-amazon.com/images/I/61PntGu1Q4L._AC_UF894,1000_QL80_.jpg", description: "TWS hi-res dengan ANC adaptif." },
  { name: "VoltFlow 65W GaN",      brand: "Avenue",  price:   750000, old_price:   900000, rating: "4.5/5", tag: "Essential", category: "aksesoris",  image: "https://pegastore.id/media/product/produk-1759388377.jpg", description: "Charger GaN ultra-cepat ukuran saku." },
])

puts " Seed selesai: #{Product.count} produk ditambahkan."