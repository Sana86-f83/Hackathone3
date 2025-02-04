import React from "react";
import Heading from "../components/headingprops";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { PiTote } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import ShopImages from "../components/shopimagediv";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";

// Array of product data
const products = [
  { image: "/shoplist/shoplist-image2.png", name: "Chocolate Muffin", price1: "$28.00", price2: "" },
  { image: "/shoplist/shoplist-image3.png", name: "Burger", price1: "$21.00", price2: "$45.00" },
  { image: "/shoplist/shoplist-image4.png", name: "Countrty Burger", price1: "$45.00", price2: "" },
  { image: "/shoplist/shoplist-image5.png", name: "Drink", price1: "$23.00", price2: "$46.00" },
  { image: "/shoplist/shoplist-image6.png", name: "Pizza", price1: "$43.00", price2: "" },
  { image: "/shoplist/shoplist-image7.png", name: "Cheese Butter", price1: "$10.00", price2: "" },
  { image: "/shoplist/shoplist-image8.png", name: "Sandwiches", price1: "$25.00", price2: "" },
  { image: "/shoplist/shoplist-image9.png", name: "Chicken Chup", price1: "$12.00", price2: "" }
];

const ShopList = () => {
  return (
    <div className="w-[1920px] h-[1800px] ">
      <Heading Heading="Our Shop" home="Home" pagename="shop" />
      <div className="w-[1320px] m-auto mt-[120px]">
        <div className="w-[1320px] h-[2100px] m-auto">
          {/* imagesDiv-shoplist */}
          <div className="grid grid-cols-3 w-[984px] h-auto ml-[2px] ">
            {products.map((product, index) => (
              <div key={index} className="w-[312px] h-[330px] mt-[24px] ">
                <Image
                  src={product.image}
                  alt={`cartimage${index + 1}`}
                  width={312}
                  height={267}
                  className="relative"
                />
                <h1 className="w-[160px]  h-[26px] mt-[8px] text-[18px] font-bold tracking-tight">
                  {product.name}
                </h1>
                <p className="flex justify-between w-[116px] h-[24px] mt-[4px] text-[16px] font-normal text-darkyellow">
                  {product.price1}
                  {product.price2 && <span className="text-gray3 line-through">{product.price2}</span>}
                </p>
                <div className="flex absolute w-[146px] h-[34px] -mt-[190px] justify-between items-center ml-[80px]">
                  <LiaProjectDiagramSolid className="w-[40.14px] h-[34px] text-darkyellow bg-white" />
                  <PiTote className="w-[40.14px] h-[34px] bg-darkyellow text-white" />
                  <CiHeart className="w-[40.14px] h-[34px] text-darkyellow bg-white" />
                </div>
              </div>
            ))}

            {/* Right side content */}
            <div className="w-[312px] h-[1489px] absolute ml-[1004px] ">
              <div className="flex justify-between w-[248px] h-[46px] mt-[24px] ml-[30px]">
                <input
                  className="absolute w-[202px] h-[46px] text-[16px] tracking-wide outline outline-1 outline-black/20 leading-6 pl-[20px]"
                  type="text"
                  placeholder="Search Product"
                />
                <h4 className="w-[46px] h-[46px] ml-[202px] text-white my-auto bg-darkyellow">
                  <HiMiniMagnifyingGlass className="text-[20px] w-[24px] h-[24px] mt-[12px] ml-[10px]" />
                </h4>
              </div>

              {/* Category filter */}
              <div className="w-[248px] h-[372px] ml-[30px] mt-[24px]">
                <h1 className="w-[248px] h-[28px] text-[20px] pl-[23px] text-cheftextcolor font-bold">Category</h1>
                {['Sandwiches', 'Burger', 'Chicken Chup', 'Drink', 'Pizza', 'Thi', 'Non Veg', 'Uncategorized'].map((category, index) => (
                  <div key={index} className="flex ml-[30px] mt-[16px] w-[248px] h-[26px]">
                    <input type="checkbox" className="w-[14px] h-[14px] bg-transparent" />
                    <h1 className="ml-[8px] w-[195px] h-[26px] -mt-[4px]">{category}</h1>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Image */}
            <div className="w-[248px] h-[286px] absolute mt-[490px] ml-[1006px]">
              <Image
                src={"/shoplist/sidebar-image1.png"}
                alt={"sidebar-image1"}
                width={248}
                height={286}
                className="ml-[30px]"
              />
              <div className="w-[248px] h-[286px] absolute ml-[30px] -mt-[286px]">
                <h1 className="w-[105px] h-[24px] text-[16px] font-bold leading-6 text-white ml-[23px] mt-[29px] tracking-wide">Perfect Taste</h1>
                <h1 className="w-[181px] h-[28px] text-[16px] font-bold leading-8 text-white ml-[23px] mt-[4px] tracking-widest">Classic Restaurant</h1>
                <p className="w-[58px] h-[24px] text-[16px] leading-6 text-darkyellow ml-[23px] mt-[13px] font-bold">45.00$</p>
                <div className="flex w-[106px] h-[24px] mt-[109px] ml-[23px]">
                  <p className="w-[78px] h-[24px] text-white leading-6">Shop Now</p>
                  <FaRegArrowAltCircleRight className="w-[20px] h-[20px] text-white m-auto" />
                </div>
              </div>
            </div>
            {/* Filter by price */}
            <div className="w-[248px] h-[87px] mt-[800px] ml-[1034px] absolute">
              <h1 className="w-[248px] h-[28px] text-cheftextcolor text-[20px]">Filter By Price</h1>
              <p className="w-[15px] h-[15px] mt-[12px] border-4 border-white rounded-full absolute"></p>
              <p className="w-[242px] h-[6px] mt-[15px]"></p>
              <p className="w-[15px] h-[15px] ml-[230px] absolute -mt-[10px] border-4 border-white rounded-full "></p>
              <p className="flex justify-between w-[246px] h-[24px] text-black/70 leading-6 mt-[9px]">
                From $0 to $8000
                <span className="w-[38px] h-[24px]">Filter</span>
              </p>
            </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between w-[306px] h-[51px] ml-[283px] mt-[120px]">
              <div className="w-[50px] h-[50px] border-2 border-black/20 text-darkyellow hover:bg-darkyellow hover:text-white">
                <MdKeyboardDoubleArrowLeft className="text-[28px] mx-auto mt-[10px]" />
              </div>
              <div className="text-center pt-[4px] w-[50px] h-[50px] text-darkyellow border-2 border-black/20 text-[28px] hover:text-white hover:bg-darkyellow">
                1
              </div>
              <div className="text-center pt-[4px] w-[50px] h-[50px] text-darkyellow border-2 border-black/20 hover:text-white text-[28px] justify-center hover:bg-darkyellow">
                2
              </div>
              <div className="text-center pt-[4px] w-[50px] h-[50px] text-darkyellow border-2 border-black/20 hover:text-white text-[28px] hover:bg-darkyellow">
                3
              </div>
              <div className="w-[50px] h-[50px] border-2 border-black/20 text-[28px] text-darkyellow hover:text-white hover:bg-darkyellow">
                <Link href={"/shopDetails"}>
                  <MdKeyboardDoubleArrowRight className="text-[28px] mx-auto mt-[10px]" />
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
