import Image from 'next/image'
import Link from 'next/link'
import ceramicLogo from "../public/ceramicLogo.png"

import { FaHome, FaUser, FaHashtag } from "react-icons/fa";
import { SidebarProps } from '../types';



export const Sidebar = ({name, username, id}: SidebarProps) => {

  return (
    <div className="sidebar">
      <div className="top">
        <div className="logoContainer">
          <Image
            src={ceramicLogo}
          />
        </div>
        <Link href = {`/profile`}>
          <a>
            <FaUser /> 1. Profile
          </a>
        </Link>
        <Link href = "/">
          <a>
            <FaHome /> 2. Post
          </a>
        </Link>
        <Link href = "/explore">
          <a>
            <FaHashtag /> 3. Explore
          </a>
        </Link>
      </div>
      <div className="bottom">
        {name !== undefined ? (
          <div className="you">
            <b>{name}</b> <br />
            <Link href = {`user/${id}`}>
              <a>
              @{username}
              </a>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
