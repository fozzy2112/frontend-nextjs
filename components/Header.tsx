import React from "react";
import Image from 'next/image'

export default function Header() {
	return (
		<div className="flex flex-row items-center space-x-5">
			<Image alt="logo" src={"/logo.png"} width={100} height="100"  />
			<div>
				<p className="text-2xl">Cari Username beserta List Repository <b>Github</b></p>
				<p className="text-2xl">Disini</p>
			</div>
		</div>
	)
}