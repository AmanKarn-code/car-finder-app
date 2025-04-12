const mockCars = [
  {
    id: 1,
    brand: "Toyota",
    name: "Camry",
    price: 25000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 15,
    description:
      "The Toyota Camry is a reliable and fuel-efficient sedan, perfect for families and daily commutes.",
    image:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
    image2:
      "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg",
  },
  {
    id: 2,
    brand: "Honda",
    name: "Civic",
    price: 22000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 16,
    description:
      "The Honda Civic is a compact car known for its efficiency, reliability, and sporty feel.",
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    image2:
      "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg",
  },
  {
    id: 3,
    brand: "BMW",
    name: "X5",
    price: 65000,
    fuelType: "Diesel",
    seatingCapacity: 7,
    year: 2023,
    transmission: "Automatic",
    mileage: 12,
    description: "The BMW X5 is a luxury SUV that combines power and elegance.",
    image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    brand: "Tesla",
    name: "Model 3",
    price: 45000,
    fuelType: "Electric",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 0,
    description:
      "The Tesla Model 3 is an all-electric sedan with impressive range and acceleration.",
    image: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    brand: "Ford",
    name: "F-150",
    price: 35000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 10,
    description:
      "The Ford F-150 is America’s best-selling pickup truck, known for its durability.",
    image: "https://images.pexels.com/photos/235222/pexels-photo-235222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    brand: "Mercedes",
    name: "C-Class",
    price: 45000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 14,
    description:
      "The Mercedes-Benz C-Class offers a blend of comfort, performance, and advanced technology.",
    image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    brand: "Toyota",
    name: "RAV4",
    price: 28000,
    fuelType: "Hybrid",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 20,
    description:
      "The Toyota RAV4 is a popular compact SUV that offers practicality and reliability.",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    brand: "Audi",
    name: "A4",
    price: 42000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 13,
    description:
      "The Audi A4 is a compact luxury sedan known for its refined interior and technology.",
    image: "https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    brand: "Chevrolet",
    name: "Silverado",
    price: 38000,
    fuelType: "Diesel",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 9,
    description:
      "The Chevrolet Silverado is a full-size pickup truck built for work and play.",
    image: "https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    brand: "Honda",
    name: "CR-V",
    price: 30000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 15,
    description:
      "The Honda CR-V is a compact SUV with excellent fuel efficiency and a smooth ride.",
    image: "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    brand: "BMW",
    name: "3 Series",
    price: 48000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 14,
    description:
      "The BMW 3 Series is known for its dynamic handling and premium features.",
    image: "https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 12,
    brand: "Toyota",
    name: "Corolla",
    price: 21000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 17,
    description:
      "The Toyota Corolla is one of the world’s best-selling cars, known for its reliability.",
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 13,
    brand: "Ford",
    name: "Explorer",
    price: 40000,
    fuelType: "Petrol",
    seatingCapacity: 7,
    year: 2023,
    transmission: "Automatic",
    mileage: 11,
    description:
      "The Ford Explorer is a midsize SUV built for family adventures.",
    image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 14,
    brand: "Audi",
    name: "Q5",
    price: 55000,
    fuelType: "Diesel",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 12,
    description:
      "The Audi Q5 is a luxury compact SUV that balances performance and comfort.",
    image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 15,
    brand: "Tesla",
    name: "Model Y",
    price: 52000,
    fuelType: "Electric",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 0,
    description:
      "The Tesla Model Y is an electric compact SUV with range and cutting-edge tech.",
    image: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 16,
    brand: "Chevrolet",
    name: "Malibu",
    price: 27000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 14,
    description:
      "The Chevrolet Malibu is a stylish midsize sedan with advanced safety features.",
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 17,
    brand: "Nissan",
    name: "Altima",
    price: 26000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    year: 2023,
    transmission: "CVT",
    mileage: 15,
    description:
      "The Nissan Altima offers a smooth ride with modern design and tech features.",
    image: "https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 18,
    brand: "Kia",
    name: "Seltos",
    price: 24000,
    fuelType: "Petrol",
    seatingCapacity: 5,
    year: 2023,
    transmission: "Automatic",
    mileage: 17,
    description:
      "The Kia Seltos is a compact SUV with sharp looks and great value.",
    image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    image2:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// Function to simulate API fetch with delay
export const fetchCars = () => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(mockCars);
    }, 800);
  });
};
