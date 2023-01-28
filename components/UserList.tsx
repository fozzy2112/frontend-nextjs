import { SearchRes } from "@/types/SearchRes";
import React from "react";
import UserItem from "./UserItem";

export default function UserList({result}:Props) {
	return (
		<div className="border rounded-[8px] w-full space-y-3 pb-10">
			<p className="text-center">Hasil Pencarian : <span className="font-bold">Asep</span></p>
			{result?.users.map((user,index)=>(
				<UserItem key={index} user={user} />
			))}
		</div>
	)
}

interface Props {
	result?:SearchRes
}