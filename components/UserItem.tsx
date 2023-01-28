import { User } from "@/types/User";
import React from "react";

export default function UserItem({user}:Props) {
	return (
		<div>{user?.login}</div>
	)
}

interface Props{
	user?:User
}