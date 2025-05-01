
import React from "react";
import { User } from "./types";

interface MobileNavUserProps {
  user: User;
}

export const MobileNavUser: React.FC<MobileNavUserProps> = ({ user }) => {
  return (
    <li className="px-4 pt-2">
      <div className="flex items-center space-x-2">
        <img src={user.avatar} alt={user.name} className="h-7 w-7 rounded-full border object-cover" />
        <span className="font-medium">{user.name}</span>
      </div>
    </li>
  );
};
