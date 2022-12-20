import Link from "next/link";
import Image from "next/image";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../../assets/images";

export function HeaderSocialItem({
  href,
  iconSrc,
  alt,
}: {
  href: string;
  iconSrc: string;
  alt: string;
}) {
  return (
    <li>
      <Link href={href}>
        <Image src={iconSrc} alt={alt} />
      </Link>
    </li>
  );
}

export default function HeaderSocialList() {
  return (
    <ul className="flex justify-content items-center gap-x-6 mt-6">
      <HeaderSocialItem
        href="https://www.twitter.com"
        alt="twitter's icon"
        iconSrc={TwitterIcon}
      />
      <HeaderSocialItem
        href="https://www.linkedin.com"
        alt="linkedin's icon"
        iconSrc={LinkedinIcon}
      />
      <HeaderSocialItem
        href="https://www.instagram.com"
        alt="instagram's icon"
        iconSrc={InstagramIcon}
      />
      <HeaderSocialItem
        href="https://www.facebook.com"
        alt="facebook's icon"
        iconSrc={FacebookIcon}
      />
    </ul>
  );
}
