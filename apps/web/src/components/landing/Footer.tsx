"use client";

import { type FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Github, Disc } from "lucide-react";
import Discord from "../../../public/img/landing/discord_icon.svg";
import { DropdownMenu } from "../shadcn/ui/dropdown-menu";

interface Props {
	className?: string;
}

function linkItem(name: string, link: string) {
	return { name, link };
}

const dropdownItemMap = {
	Resources: [
		linkItem("Register", "/register"),
		linkItem("FAQ", "/faq"),
		linkItem("Code of Conduct", "/conduct"),
		linkItem("Contact Us", "/contact"),
		linkItem("ACM-W", "https://acmutsa.org/suborg_acmw/"),
		linkItem("ACM UTSA", "https://acmutsa.org/"),
	],
	Links: [linkItem("Open Source", "https://acmutsa.org/")],
	"Other Hackathons": [
		linkItem("CodeQuantum", "/"),
		linkItem("RowdyDatathon", "/"),
		linkItem("TAMUHack", "/"),
		linkItem("WEHack", "/"),
		linkItem("HackUTD", "/"),
		linkItem("HackTX", "/"),
		linkItem("HackUNT", "/"),
		linkItem("HackUTA", "/"),
		linkItem("Hacklahoma", "/"),
	],
};

export default function Footer() {
	// const [showResources, setShowResources] = useState(false);
	// const [showLinks, setShowLinks] = useState(false);
	// const [showHackathons, setShowHackathons] = useState(false);
	const [shown, setShown] = useState([false, false, false]);

	return (
		<section className="gap-8 w-full items-center justify-center min-h-[25vh] border-t-2 border-muted-foreground p-8">
			<div className="grid md:grid-cols-5 grid-cols-2 justify-items-center gap-8">
				<h1 className="text-4xl md:text-5xl font-black col-span-2 row-span-1 self-center">
					RowdyHacks
				</h1>
				<div className="md:col-span-1 col-span-2 row-span-1 w-11/12 flex flex-col justify-center gap-5">
					{Object.entries(dropdownItemMap).map(([title, data], idx) => (
						<div className="w-full border-b md:border-none">
							<h1
								className="cursor-pointer text-md font-bold"
								onClick={() =>
									setShown(shown.map((v, i) => (i === idx ? !v : v)))
								}
							>
								{title}
							</h1>
								{shown[idx] &&
									data.map(({ name, link }) => <Link className="text-sm text-stone-400" href={link}>{name}</Link>)}
						</div>
					))}
				</div>
				<Link className="col-span-2" href="https://vercel.com">
					<Image
						src="/img/powered-by-vercel.svg"
						alt="Powered by Vercel"
						width={200}
						height={10}
					/>
				</Link>
			</div>
		</section>
	);
}
