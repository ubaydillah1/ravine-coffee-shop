"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ToggleSwitch from "./ToggleSwitch";
import { Product } from "../types";
import { useState } from "react";
import EditProductOverlay from "./overlay/EditProductOverlay";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const [isEditOverlayOpen, setIsEditOverlayOpen] = useState(false);

  const handleEditClick = () => setIsEditOverlayOpen(true);

  return (
    <>
      <motion.div
        key={product.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={handleEditClick}
        className="border border-neutral-n300 rounded-[16px] p-[16px] flex flex-col gap-[16px] hover:shadow-lg transition-shadow"
      >
        <div className="bg-[#fdf7f1] rounded-[12px] p-[2px]">
          <div className="w-full aspect-square relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-contain"
              priority={false}
            />
          </div>
        </div>

        <div className="space-y-[8px]">
          <p className="l2-b line-clamp-1">{product.name}</p>
          <p className="l2-r text-neutral-n700">
            Rp{Number(product.price).toLocaleString("id-ID")}
          </p>
        </div>

        <div className="flex justify-between items-center pt-[8px] border-t border-neutral-n100">
          <span className="l3-r text-neutral-n800">Display</span>
          <ToggleSwitch
            productId={product.id}
            defaultActive={product.isAvailable}
          />
        </div>
      </motion.div>
      <EditProductOverlay
        openModal={isEditOverlayOpen}
        closeModal={() => setIsEditOverlayOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
