// Local images mapping by category
export const LOCAL_IMAGES = {
  women: [
    'chudidar set.jpg',
    'chudidar.webp',
    'kurta.jpg',
    'kurti.jpg',
    'lehenga.webp',
    'salwar kameez.jpg',
    'Saree (2).jpg',
    'saree.jpg',
    'Saree.webp',
    'short kurti.webp',
    'silk saree.jpg',
    'Top.jpg',
    'top.webp',
  ],
  men: [
    'black shirt.jpg',
    'flower shirt.webp',
    'formal wear.webp',
    'formals.jpg',
    'grey shirt.jpg',
    'Hoodie.avif',
    'lined shirt.webp',
    'polo shirt.jpg',
    'salwar.jpeg',
    'shirt.webp',
    't-shirt.jpg',
    'white salwar.webp',
  ],
  kids: [
    'baby frock.avif',
    'floral frock.jpg',
    'FormalWear.jpg',
    'frock.webp',
    'Fromawearl.jpg',
    'kids salwar.jpg',
    'kids_navy_casualwear.jpg',
    'Partywear (2).jpg',
    'partywear.jpg',
    'traditional (2).jpg',
    'Traditional.jpg',
    'yellow frock.jpg',
  ],
};

export const getRandomImage = (category: 'women' | 'men' | 'kids'): string => {
  const images = LOCAL_IMAGES[category];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return `/images/Images/${category}/${randomImage}`;
};
