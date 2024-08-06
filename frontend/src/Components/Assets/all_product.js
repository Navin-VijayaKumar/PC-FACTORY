// src/Components/Assets/all_product.js
import p1_img from "./cpu1.jpeg";
import p2_img from "./cpu2.jpeg";
import p3_img from "./cpu3.jpeg";
import p4_img from "./gpu1.jpeg";
import p5_img from "./gpu2.jpeg";
import p6_img from "./gpu3.jpeg";

const all_product = [
    {
        id: 1,
        name: "Intel Core i7-13700K Desktop Processor 16 cores (8 P-cores + 8 E-cores) 30M Cache, up to 5.4 GHz Socket LGA 1700",
        image: p1_img,
        category: "cpu",
        new_price: 35000,
        old_price: 65000,
    },
    {
        id: 2,
        name: "Intel Core i3 12100F 12th Gen Generation Desktop PC Processor 4 CPU with 12MB Cache and up to 4.30 GHz Clock Speed LGA 1700 Socket",
        image: p2_img,
        category: "cpu",
        new_price: 7500,
        old_price: 12000,
    },
    {
        id: 3,
        name: "Intel Core I5 12400F 12 Gen Generation Desktop Pc Processor 6, CPU with 18Mb Cache and Up to 4.40 Ghz Clock Speed Ddr5 and Ddr4 Ram Support Lga 1700 Socket, Micro ATX",
        image: p3_img,
        category: "cpu",
        new_price: 12000,
        old_price: 20000,
    },
    {
        id: 4,
        name: "GIGABYTE GV-N4070WF3OC-12GD Graphics Board with NVIDIA GeForce RTX4070, 12 GB",
        image: p4_img,
        category: "gpu",
        new_price: 65000,
        old_price: 90000,
    },
    {
        id: 5,
        name: "ASUS Rog Strix Geforce Rtx 4090 Oc Edition Gaming Graphics Card (Pcie 4.0, 24Gb Gddr6X",
        image: p5_img,
        category: "gpu",
        new_price: 200000,
        old_price: 250000,
    },
    {
        id: 6,
        name: "GIGABYTE Nvidia GeForce ® GTX 2080TI D6 pci_e_x16 WINDFORCE OC 4GD Graphics Card with Integrated 4GB",
        image: p6_img,
        category: "gpu",
        new_price: 25000,
        old_price: 30000,
    },
    
];

export default all_product;
