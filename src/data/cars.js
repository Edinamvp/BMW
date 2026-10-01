import m3 from "../assets/cars/bmw-m3.jpg";
import m4f82 from "../assets/cars/m4f82.jpg";
import m5 from "../assets/cars/m5.jpg";
import m2 from "../assets/cars/m2.jpg";
import m4csl from "../assets/cars/mm4.jpg";
import m8 from "../assets/cars/m8.jpg";
import i4 from "../assets/cars/i4.jpg";
import ix from "../assets/cars/ix.jpg";
import i7 from "../assets/cars/ii7.jpg";
import x5 from "../assets/cars/x5.jpg";
import x7 from "../assets/cars/x7.jpg";
import z4 from "../assets/cars/zz4.jpg";
import series3 from "../assets/cars/bmw-3-series.jpg";


const cars = [
  {
    id: "m3-competition",
    name: "BMW M3 Competition",
    series: "M Series",
    price: "$80,200",
    engine: "3.0L BMW M TwinPower Turbo Inline 6-Cylinder",
    horsepower: "503 hp",
    torque: "479 lb-ft",
    fuel: "Premium Unleaded Gasoline",
    transmission: "8-Speed M Steptronic Automatic",
    drivetrain: "Rear-Wheel Drive / xDrive AWD available",
    zeroToSixty: "3.4 seconds",
    topSpeed: "180 mph",
    year: "2025",
    description:
      "The benchmark high-performance sports sedan. Track-ready dynamics with everyday luxury.",
    overview:
      "Powered by the S58 twin-turbocharged inline-six engine, the M3 Competition delivers relentless acceleration and razor-sharp handling.",
    image: m3
  },

  {
    id: "m4-competition",
    name: "BMW M4 Competition F82",
    series: "M Series",
    price: "$43,400",
    engine: "3.0L twin-turbo inline-6",
    horsepower: "444 hp",
    torque: "406 lb-ft",
    fuel: "Premium Unleaded Gasoline",
    transmission: "6-Speed Manual or 7-Speed Dual-Clutch Automatic (DCT)",
    drivetrain: "Rear-Wheel Drive (RWD)",
    zeroToSixty: "3.8 - 4.0 seconds",
    topSpeed: "155 mph",
    year: "2018",
    description:
      "The 2018 BMW M4 Competition (F82) is a high-performance rear-wheel-drive coupe powered by a 3.0-liter twin-turbocharged inline-6 engine producing 444 horsepower.",
    overview:
      "Powered by the S55 twin-turbocharged inline-six engine, the 2018 BMW M4 Competition (F82) delivers exhilarating performance, razor-sharp handling, and an engaging rear-wheel-drive driving experience, combining track-inspired engineering with everyday luxury.",
    image: m4f82
  },

  {
    id: "m5-competition",
    name: "BMW M5 Competition",
    series: "M Series",
    price: "$111,100",
    engine: "4.4L BMW M TwinPower Turbo V8",
    horsepower: "617 hp",
    torque: "553 lb-ft",
    fuel: "Premium Unleaded Gasoline",
    transmission: "8-Speed M Steptronic Automatic",
    drivetrain: "M xDrive All-Wheel Drive",
    zeroToSixty: "3.1 seconds",
    topSpeed: "190 mph",
    year: "2025",
    description:
      "An executive luxury sedan with super-car slaying power and precision M xDrive control.",
    overview:
      "Blends executive-level refinement with brutal V8 twin-turbo performance and selectable 2WD drift capability.",
    image: m5
  },

  {
    id: "m2-coupe",
    name: "BMW M2 Coupe",
    series: "M Series",
    price: "$63,200",
    engine: "3.0L BMW M TwinPower Turbo Inline 6",
    horsepower: "453 hp",
    torque: "406 lb-ft",
    fuel: "Premium Unleaded Gasoline",
    transmission: "6-Speed Manual / 8-Speed M Steptronic",
    drivetrain: "Rear-Wheel Drive",
    zeroToSixty: "3.9 seconds",
    topSpeed: "177 mph",
    year: "2025",
    description:
      "Compact size, pure rear-wheel drive balance, and high-revving M performance.",
    overview:
      "The pure driver's car in the lineup with short wheelbase agility and traditional manual transmission option.",
    image: m2
  },

  {
    id: "m4-csl",
    name: "BMW M4 CSL",
    series: "M Series",
    price: "$139,900",
    engine: "3.0L BMW M TwinPower Turbo High-Output Inline 6",
    horsepower: "543 hp",
    torque: "479 lb-ft",
    fuel: "Premium Unleaded Gasoline",
    transmission: "8-Speed M Steptronic Automatic",
    drivetrain: "Rear-Wheel Drive",
    zeroToSixty: "3.6 seconds",
    topSpeed: "191 mph",
    year: "2023",
    description:
      "Competition Sport Lightweight built exclusively for maximum track performance.",
    overview:
      "Carbon fiber components, rear-seat deletion, and track-tuned suspension make the M4 CSL a true weapon.",
    image: m4csl
  },

  {
    id: "m8-competition-gran-coupe",
    name: "BMW M8 Competition Gran Coupé",
    series: "M Series",
    price: "$138,800",
    engine: "4.4L BMW M TwinPower Turbo V8",
    horsepower: "617 hp",
    torque: "553 lb-ft",
    fuel: "Premium Unleaded Gasoline",
    transmission: "8-Speed M Steptronic Automatic",
    drivetrain: "M xDrive All-Wheel Drive",
    zeroToSixty: "3.0 seconds",
    topSpeed: "190 mph",
    year: "2025",
    description:
      "The peak 4-door luxury flagship with stunning proportions and breathtaking launch power.",
    overview:
      "Supreme luxury meets relentless twin-turbocharged acceleration in BMW's top-tier Gran Coupé styling.",
    image: m8
  },

    {
    id: "i4-m50",
    name: "BMW i4 M50",
    series: "i Series (Electric)",
    price: "$69,700",
    engine: "Dual Electric Motors (eDrive)",
    horsepower: "536 hp",
    torque: "586 lb-ft",
    fuel: "Electric",
    transmission: "Single-Speed Automatic",
    drivetrain: "xDrive All-Wheel Drive",
    zeroToSixty: "3.7 seconds",
    topSpeed: "140 mph",
    year: "2025",
    description:
      "The first fully electric performance vehicle engineered by BMW M.",
    overview:
      "Delivers near-instantaneous torque through dual electric motors with an athletic chassis balance.",
    image: i4
  },

  {
    id: "ix-m60",
    name: "BMW iX M60",
    series: "i Series (Electric)",
    price: "$111,500",
    engine: "Dual High-Performance Electric Motors",
    horsepower: "610 hp",
    torque: "811 lb-ft",
    fuel: "Electric",
    transmission: "Single-Speed Automatic",
    drivetrain: "xDrive All-Wheel Drive",
    zeroToSixty: "3.6 seconds",
    topSpeed: "155 mph",
    year: "2025",
    description:
      "All-electric SAV with futuristic design, carbon fiber frame structure, and vast torque.",
    overview:
      "Combines sustainable mobility with massive 811 lb-ft torque capabilities and advanced tech architecture.",
    image: ix
  },

  {
    id: "i7-xdrive60",
    name: "BMW i7 xDrive60",
    series: "7 Series (Electric)",
    price: "$119,300",
    engine: "Dual Electric Motors",
    horsepower: "536 hp",
    torque: "549 lb-ft",
    fuel: "Electric",
    transmission: "Single-Speed Automatic",
    drivetrain: "xDrive All-Wheel Drive",
    zeroToSixty: "4.5 seconds",
    topSpeed: "149 mph",
    year: "2025",
    description:
      "Flagship all-electric luxury sedan featuring executive lounge seating.",
    overview:
      "Redefines modern luxury with a 31-inch Theater Screen, crystal headlights, and silent power.",
    image: i7
  },

  {
    id: "x5-m-competition",
    name: "BMW X5 M Competition",
    series: "X Series (SAV)",
    price: "$122,300",
    engine: "4.4L V8 Turbo with 48V Mild Hybrid",
    horsepower: "617 hp",
    torque: "553 lb-ft",
    fuel: "Premium Unleaded Gasoline",
    transmission: "8-Speed M Steptronic Automatic",
    drivetrain: "M xDrive All-Wheel Drive",
    zeroToSixty: "3.7 seconds",
    topSpeed: "177 mph",
    year: "2025",
    description:
      "Dominant posture, supreme utility, and uncompromised V8 track energy.",
    overview:
      "Commands the road by fusing high-output V8 power with spatial luxury and aggressive bodywork.",
    image: x5
  },

  {
    id: "x7-m60i",
    name: "BMW X7 M60i",
    series: "X Series (SAV)",
    price: "$108,700",
    engine: "4.4L BMW M TwinPower Turbo V8",
    horsepower: "523 hp",
    torque: "553 lb-ft",
    fuel: "Premium Unleaded Gasoline",
    transmission: "8-Speed Sport Automatic",
    drivetrain: "xDrive All-Wheel Drive",
    zeroToSixty: "4.5 seconds",
    topSpeed: "155 mph",
    year: "2025",
    description:
      "Full-sized 3-row luxury SAV packed with standard air suspension and M engine power.",
    overview:
      "Offers space for seven passengers alongside V8 performance and dynamic handling technology.",
    image: x7
  },

  {
    id: "z4-m40i",
    name: "BMW Z4 M40i",
    series: "Z Series (Roadster)",
    price: "$66,300",
    engine: "3.0L BMW TwinPower Turbo Inline 6",
    horsepower: "382 hp",
    torque: "369 lb-ft",
    fuel: "Premium Unleaded Gasoline",
    transmission: "8-Speed Sport Automatic / 6-Speed Manual",
    drivetrain: "Rear-Wheel Drive",
    zeroToSixty: "3.9 seconds",
    topSpeed: "155 mph",
    year: "2025",
    description:
      "Classic open-top two-seater roadster with near 50/50 weight distribution.",
    overview:
      "A pure open-air driving experience with low center of gravity and classic long-hood proportions.",
    image: z4
  },

  {
    id: "m330i-sedan",
    name: "BMW 330i Sedan",
    series: "3 Series",
    price: "$44,500",
    engine: "2.0L BMW TwinPower Turbo Inline 4",
    horsepower: "255 hp",
    torque: "295 lb-ft",
    fuel: "Premium Unleaded Gasoline",
    transmission: "8-Speed Sport Automatic",
    drivetrain: "Rear-Wheel Drive / xDrive AWD available",
    zeroToSixty: "5.6 seconds",
    topSpeed: "155 mph",
    year: "2025",
    description:
      "The iconic sports sedan that defined the segment for decades.",
    overview:
      "Combines daily efficiency with precise suspension tuning and intuitive driver technology.",
    image: series3
  }
];


export default cars;

