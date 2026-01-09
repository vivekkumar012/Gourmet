import { prisma } from "@/lib/prisma";
import React from "react";

import { MenuItem as Item } from "@prisma/client";
import { MenuItem } from "./menu-item";

interface Props {}

const MenuList = async (props: Props) => {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {menuItems.map((item: Item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuList;
