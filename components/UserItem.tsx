import { User } from "@/types/User";
import Image from 'next/image'
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import Link from "next/link";

export default function UserItem({user}:Props) {
	return (
		<div className="flex justify-between items-center w-full hover:bg-zinc-100 px-[20px] py-[5px]">
			<div className="inline-flex items-center space-x-3">
				<Image alt="profile" width={40} height={40} src={user?.avatar_url} className="rounded-full" />
				<span>{user.login}</span>
			</div>
			<Link className="hover:bg-black hover:text-white p-3 flex items-center" href={`/detail/${user.login}`}>
				<p className="text-[16px]">Details</p>
				<span>
					<ChevronRightIcon className="w-4 h-4" />
				</span>
			</Link>
		</div>
	)
}

interface Props{
	user:User
}